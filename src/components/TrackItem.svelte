<script lang="ts">
    export let track: SpotifyApi.TrackObjectFull;
</script>

<div class="track-item hover:bg-white/10">
    <div
        class="cover mx-4"
        style="background-image: url({track.album.images[0].url});"
    />
    <div>
        <div>{track.name}</div>
        <div class="text-sm text-neutral-400">
            {track.artists.map((e) => e.name).join(", ")}
        </div>
    </div>
    <div class="ml-auto mr-4 flex justify-center items-center">
        <span class="material-icons">more_horiz</span>
    </div>
</div>

<style lang="postcss">
    div.track-item {
        @apply h-14 flex items-center cursor-pointer rounded;

        div.cover {
            @apply w-10 h-10 bg-cover bg-center;
        }
    }
</style>
