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
            <div class="content">
                <Route path="/" component={UserLibrary} />
            </div>
            <div class="player" />
        </main>
    </Router>
{/await}

<style lang="postcss">
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
