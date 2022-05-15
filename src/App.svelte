<script>
    import { Router, Route } from "svelte-navigator";

    import Home from "@/views/Home.svelte";
    import Login from "@/views/Login.svelte";
</script>

<Router>
    <Route path="/*" component={Home} />
    <Route path="/login" component={Login} />
</Router>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
