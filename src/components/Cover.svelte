<script lang="ts">
    export let url: string;
</script>

<div class="cover" style="background-image: url({url});" />

<style lang="postcss">
    div.cover {
        @apply bg-cover bg-center;
        padding-bottom: 100%;
    }
</style>
