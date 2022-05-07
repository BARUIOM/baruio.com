<script lang="ts">
    import { goto } from "@roxi/routify";
    import { Authenticator } from "@/lib/Authenticator";

    import Loading from "@/views/Loading.svelte";

    const validate = () =>
        Authenticator.validate().catch(() => $goto("/login"));
</script>

{#await validate()}
    <Loading />
{:then}
    <slot />
{/await}
