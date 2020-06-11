const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

class WS {
    constructor(port, client, settings) {
        this.client = client;
        this.settings = settings;

        this.app = express();

        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        this.registerRoots();

        this.server = this.app.listen(port, () => console.log(`App running on port ${port}`));
    }

    registerRoots(){
        this.app.post('/sendMessage', async (res, req) => {
            let user = await this.client.users.fetch(this.settings.discord.sendMessageTo) || await this.client.fetchUser(this.settings.discord.sendMessageTo)
            user.send(this.settings.discord.message);
        });
    }
}

module.exports = WS;