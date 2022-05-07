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
    <slot />
{/await}
