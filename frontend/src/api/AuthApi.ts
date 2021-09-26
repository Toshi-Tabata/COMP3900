import * as config from '../config/config.json';
import Utils from '../api/apiHelper';

const url = config.url;

// abstract API calls to the backend this file
const Auth = {
    login: (username: string, password: string) => {
        const path = '/login';
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})

        };

        Utils.getJSON(path, options);
    },

    // TODO: probably automatically grab the token from redux
    logout: (token: string) => {
        console.log(token);
    }
}

export default Auth;