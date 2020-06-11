# react-express-electron-discord.js starter

This is meant to be a base for discord bots with an electron and react frontend.

It starts an electron app with a express server and initializes discord. If you press the button, the bot will send you a direct message, and thats it no more no less.

I've build this on my own on other starters, because there was none that fitted my requirements.
You'll need some knowledge about javascript, [react.js](https://reactjs.org/) and the [discord.js](https://discord.js.org/#/) framework to get going. If you want to customize it further you may need to look into [express](https://expressjs.com/) and [electron](https://www.electronjs.org/).

I dont have any plans for longterm support or new features, because this is meant to stay "simple" and I dont really have the time to support it, but feel free to make your own starters/ projects based on this.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start your-folder-name
# Go into the repository
cd your-folder-name
# Install dependencies
npm install
```
You'll then need to head to ```app/config/config.json```  add your bot token from the [discord developer site](https://discord.com/developers), enter the id of the person you want to write (not the display name), and edit the message if you want to (dont leave it empty tho). 

After that you can

```
# Run the app
npm start
```

If you made changes to the code, you need to reload the electron window via ```ctr + r```.



## Doing your own stuff

If you want to add more discord functionality head to the ```app.js``` file and call it like in the ```app/helpers/api.js``` file. You can see the implementation of the api file in the ```app/views/home.js``` file.

There is also an assets folder, which i dont use. If you want to bundle some images you can put them into that folder and you **need** to uncomment line 36 in the webpack config.

#### License [CC0 1.0 (Public Domain)](LICENSE.md)
