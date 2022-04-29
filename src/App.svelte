<script lang="ts">
    import type { RouteDefinition } from "svelte-spa-router";
    import Router, { replace } from "svelte-spa-router";
    import { wrap } from "svelte-spa-router/wrap";

    import Login from "@/views/Login.svelte";
    import Main from "@/views/Main.svelte";

    import { Authenticator } from "@/lib/Authenticator";

    const isAuthenticated = () => Authenticator.isAuthenticated();
    const isNotAuthenticated = () => !isAuthenticated();

    const routes: RouteDefinition = {
        "/": wrap({
            component: Main,
            conditions: [isAuthenticated],
        }),
        "/login": wrap({
            component: Login,
            conditions: [isNotAuthenticated],
        }),
    };

    const conditionsFailed = () => {
        if (isAuthenticated()) {
            return replace("/");
        }

        if (isNotAuthenticated()) {
            return replace("/login");
        }
    };
</script>

<Router {routes} on:conditionsFailed={conditionsFailed} />

<style lang="scss">
</style>
