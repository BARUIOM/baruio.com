<script lang="ts">
    import { Baruio } from "@/lib/Baruio";
    import FormButton from "@/components/FormButton.svelte";
    import FormInput from "@/components/FormInput.svelte";

    let username = "";
    let password = "";

    const spotifyLogin = () => Baruio.startOAuth();
</script>

<div class="login-page">
    <div class="card space-y-4 w-full md:w-1/2 xl:w-1/3 2xl:w-1/4">
        <div class="text-xl text-center">Connect to Baruio Music</div>

        <FormInput label="Username" bind:value={username} />
        <FormInput label="Password" type="password" bind:value={password} />

        <FormButton label="Login" color="#262626" />
        <FormButton
            label="Sign in with Spotify"
            color="#1DB954"
            click={spotifyLogin}
        />
    </div>
</div>

<style lang="postcss">
    div.login-page {
        @apply w-screen h-screen p-4 flex justify-center items-center;

        > div.card {
            @apply rounded p-4 bg-neutral-900 flex flex-col;
        }
    }
</style>
