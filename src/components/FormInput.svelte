<script lang="ts">
    export let label: string;
    export let rounded: boolean = false;

    export let value: string = "";
    export let type: "text" | "password" = "text";

    const onInput = (event: Event) => {
        value = (<HTMLInputElement>event.target).value;
    };
</script>

<div>
    <div class="text-sm">{label}</div>
    <input class:pill={rounded} {type} {value} on:input={onInput} />
</div>

<style lang="postcss">
    input {
        @apply w-full h-8 px-2 mt-1 rounded bg-neutral-800 outline-none;
    }

    input.pill {
        @apply rounded-full;
    }
</style>
