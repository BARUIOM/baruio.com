import {
    userSavedAlbums,
    userSavedPlaylists,
    userSavedTracks
} from './store';

import Spotify from './Spotify';

export const loadUserSavedAlbums = async (): Promise<void> => {
    if (userSavedAlbums.loaded)
        return;

    await Spotify.getMySavedAlbums()
        .then(Spotify.getAll)
        .then((e) => userSavedAlbums.set([...e]));
};

export const loadUserSavedPlaylists = async (): Promise<void> => {
    if (userSavedPlaylists.loaded)
        return;

    await Spotify.getUserPlaylists()
        .then(Spotify.getAll)
        .then((e) => userSavedPlaylists.set([...e]));
};

export const loadUserSavedTracks = async (): Promise<void> => {
    if (userSavedTracks.loaded)
        return;

    await Spotify.getMySavedTracks()
        .then(Spotify.getAll)
        .then((e) => userSavedTracks.set([...e]));
};
