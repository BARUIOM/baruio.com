<script lang="ts">
    import { Router, Route, useLocation, useNavigate } from "svelte-navigator";

    import { Authenticator } from "@/lib/Authenticator";
    import { Baruio } from "@/lib/Baruio";

    import Loading from "@/views/Loading.svelte";
    import UserLibrary from "@/views/UserLibrary.svelte";

    const location = useLocation();
    const navigate = useNavigate();

    const check = () => {
        const params = new URLSearchParams($location.search);

        if (params.has("code")) {
            const code = params.get("code");

            return Baruio.validateOAuth(code);
        }

        return Authenticator.validate();
    };

    const validate = async () =>
        check().catch(() => {
            navigate("/login", { replace: true });
        });
</script>

{#await validate()}
    <Loading />
{:then}
    <Router>
        <main class="layout">
            <div class="header" />
            <div class="content">
                <Route path="/" component={UserLibrary} />
            </div>
            <div class="player" />
        </main>
    </Router>
{/await}

<style lang="postcss">
    $header: 4rem;
    $player: 5rem;

    $transparent: rgba(0, 0, 0, 0.5);

    main {
        div.header {
            @apply w-full fixed top-0 z-10 border-b border-white/10;
            background-color: $transparent;
            backdrop-filter: blur(30px);
            min-height: $header;
            height: $header;
        }

        div.content {
            @apply z-0;
            padding: $header 0.5rem $player 0.5rem;
        }

        div.player {
            @apply w-full fixed bottom-0 z-10 border-t border-white/10;
            background-image: linear-gradient($transparent 0%, #000 100%);
            backdrop-filter: blur(30px);
            min-height: $player;
            height: $player;
        }
    }
</style>
