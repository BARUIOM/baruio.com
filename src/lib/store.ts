import { get, writable } from 'svelte/store';

function collection<T>() {
    const loaded = writable(false);
    const collection = writable<T[]>([]);

    const add = (item: T) => collection
        .update(items => [item, ...items]);
    const remove = (index: number) => collection
        .update(items => items.filter((_, i) => i !== index));

    const set = (value: T[]) => {
        collection.set(value);
        loaded.set(!!value.length);
    };

    return {
        subscribe: collection.subscribe,
        add, remove, set,
        get loaded(): boolean {
            return get(loaded);
        }
    };
}

export const userSavedAlbums = collection<SpotifyApi.SavedAlbumObject>();
export const userSavedPlaylists = collection<SpotifyApi.PlaylistObjectSimplified>();
export const userSavedTracks = collection<SpotifyApi.SavedTrackObject>();
