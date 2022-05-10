<script lang="ts">
    import { Router, useNavigate, useParams } from "svelte-navigator";

    import { Authenticator } from "@/lib/Authenticator";
    import { Baruio } from "@/lib/Baruio";

    import Loading from "@/views/Loading.svelte";

    const navigate = useNavigate();
    const params = useParams();

    const check = () => {
        if ("code" in $params) {
            const code = $params["code"];

            return Baruio.validateOAuth(code);
        }

        return Authenticator.validate();
    };

    const validate = async () =>
        check()
            .then(() => {
                navigate("/", { replace: true });
            })
            .catch(() => {
                navigate("/login", { replace: true });
            });
</script>

{#await validate()}
    <Loading />
{:then}
    <Router>
        <main class="layout">
            <div class="header" />
            <div class="content" />
            <div class="player" />
        </main>
    </Router>
{/await}

<style lang="scss">
    main.layout {
        @apply w-screen h-screen flex flex-col;

        div.header {
            @apply h-16 border-b border-white;
            min-height: 4rem;
        }

        div.content {
            @apply h-full p-2 overflow-auto;
        }

        div.player {
            @apply h-24 border-t border-white;
            min-height: 6rem;
        }
    }
</style>
