<script lang="ts">
    import ContentCard from "@/components/ContentCard.svelte";
    import TrackItem from "@/components/TrackItem.svelte";

    import { loadUserLibrary } from "@/lib/SpotifyClient";

    import {
        userSavedAlbums,
        userSavedPlaylists,
        userSavedTracks,
    } from "@/lib/store";

    $: albums = userSavedAlbums;
    $: playlists = userSavedPlaylists;
    $: likedTracks = userSavedTracks;

    loadUserLibrary();
</script>

<div class="title">Your playlists</div>
<div class="card-collection">
    {#each $playlists as playlist}
        <div class="w-6/12 sm:w-3/12 lg:w-2/12 2xl:w-1/12">
            <ContentCard
                cover={playlist.images[0].url}
                title={playlist.name}
                href="/playlist/{playlist.id}"
                meta={[{ title: playlist.description }]}
            />
        </div>
    {/each}
</div>

<div class="title">Your liked albums</div>
<div class="card-collection">
    {#each $albums as album}
        <div class="w-6/12 sm:w-3/12 lg:w-2/12 2xl:w-1/12">
            <ContentCard
                cover={album.album.images[0].url}
                title={album.album.name}
                href="/album/{album.album.id}"
            />
        </div>
    {/each}
</div>

<div class="title">Your liked tracks</div>
<div class="p-2">
    {#each $likedTracks as track}
        <TrackItem track={track.track} />
    {/each}
</div>

<style lang="scss">
    div.title {
        @apply p-2 text-2xl font-bold border-b border-white/10;
    }

    div.card-collection {
        @apply flex flex-wrap;

        > div {
            @apply p-2;
        }
    }
</style>
