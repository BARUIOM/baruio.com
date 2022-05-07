import Axios from "axios";

import { Authenticator } from "./Authenticator";

const BARUIO_API_URL = import.meta.env['VITE_BARUIO_API_URL'];

const axios = Axios.create({
    baseURL: BARUIO_API_URL,
});

export namespace Baruio {

    export function startOAuth() {
        window.open(BARUIO_API_URL + '/oauth', '_self');
    }

    export async function validateOAuth(code: string) {
        const response = await axios.post('/oauth', { code });

        if (response.status !== 200)
            throw new Error('Error validating OAuth token');

        const { data } = response;
        const accessToken: string = data['access_token'];
        const refreshToken: string = data['refresh_token'];

        Authenticator.setUser({ accessToken, refreshToken });
    }

}
