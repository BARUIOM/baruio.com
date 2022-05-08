<script lang="ts">
    import { goto, params } from "@roxi/routify";

    import { Authenticator } from "@/lib/Authenticator";
    import { Baruio } from "@/lib/Baruio";

    import Loading from "@/views/Loading.svelte";

    const validate = () => {
        if ("code" in $params) {
            const code = $params["code"];

            return Baruio.validateOAuth(code).then(() => $goto("/"));
        }

        return Authenticator.validate().catch(() => $goto("/login"));
    };
</script>

{#await validate()}
    <Loading />
{:then}
    <main class="layout">
        <div class="h-16 border-b border-white" />
        <div class="h-full p-4"><slot /></div>
        <div class="h-24 border-t border-white" />
    </main>
{/await}

<style lang="scss">
    main.layout {
        @apply w-screen h-screen flex flex-col;
    }
</style>
