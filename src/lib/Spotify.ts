import SpotifyWebApi from "spotify-web-api-js";

import { Authenticator } from "./Authenticator";
import { Baruio } from "./Baruio";

const client = new SpotifyWebApi();

const setAccessToken = () => {
    const user = Authenticator.getUser();
    client.setAccessToken(user.accessToken);
};

setAccessToken();

const wrapper = <T extends (...unknown) => unknown | Promise<unknown>>(fun: T): T => {
    const retry = function () {
        setAccessToken();
        return this(arguments);
    };

    return function () {
        const result = fun.apply(client, arguments);

        return Promise.resolve(result)
            .catch((error: XMLHttpRequest) => {
                if (error.status === 401) {
                    return Baruio.refreshUserAccessToken()
                        .then(() => retry.apply(fun, arguments));
                }

                throw error;
            });
    } as T;
};

const paginate = async <T>(response: SpotifyApi.PagingObject<T>): Promise<typeof response['items']> => {
    const items = [...response.items];

    if (response.next) {
        const getGeneric = wrapper(client.getGeneric);
        const data = await getGeneric(response.next);

        await paginate(data as SpotifyApi.PagingObject<T>)
            .then(e => items.push(...e));
    }

    return items;
};

type SpotifyApi = SpotifyWebApi.SpotifyWebApiJs;
type SpotifyApiFunction = keyof SpotifyApi;

interface Spotify {
    'getMySavedTracks': SpotifyApi['getMySavedTracks'];
    'getUserPlaylists': SpotifyApi['getUserPlaylists'];
}

class Spotify {
    public getAll = paginate;
}

const functions: SpotifyApiFunction[] = [
    'getMySavedTracks',
    'getUserPlaylists',
];

for (const name of functions) {
    Spotify.prototype[name] = wrapper(client[name]);
}

export default new Spotify();
