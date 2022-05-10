<script lang="ts">
    import { useNavigate } from "svelte-navigator";

    export let cover: string;
    export let title: string;
    export let meta: { title: string; href?: string }[] = [];
    export let href: string;

    const navigate = useNavigate();
</script>

<div class="card" on:click={() => navigate(href)}>
    <div class="cover" style="background-image: url({cover});" />

    <div class="detail space-y-1">
        <div class="truncate text-md font-medium">{title}</div>

        {#each meta as item}
            {#if item.href}
                <a class="meta" href={item.href}>{item.title}</a>
            {:else}
                <div class="meta">{item.title}</div>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    div.card {
        @apply h-full p-4 rounded bg-neutral-900 cursor-pointer space-y-4;

        div.cover {
            @apply bg-cover bg-center;
            padding-bottom: 100%;
        }

        div.detail {
            min-height: 64px;

            .meta {
                @apply text-sm text-neutral-400 truncate;
            }
        }
    }
</style>
