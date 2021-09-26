import * as config from '../config/config.json';

const url = config.url;

// abstract API calls to the backend this file
const Auth = {
    login: (username: string, password: string) => {
        console.log(username, password);
    },

    // TODO: probably automatically grab the token from redux
    logout: (token: string) => {
        console.log(token);
    }
}
