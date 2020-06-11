import Axios from 'axios';

const Api = {
    sendMessage: () => Axios.post('/sendMessage')
};

export default Api;
