<script lang="ts">
    import Router from "svelte-spa-router";
    import routes from "./routes";
</script>

<main>
    <div class="w-screen h-screen flex flex-col">
        <div class="h-16 border-b border-white" />
        <div class="h-full">
            <Router {routes} />
        </div>
        <div class="h-24 border-t border-white" />
    </div>
</main>

<style lang="scss">
</style>
