<script lang="ts">
    import chroma from "chroma-js";

    export let label: string;
    export let color: string;

    export let click = (event?: Event) => {};

    const backgroundColor = chroma(color);
    const hoverColor = chroma(color).luminance(0.2, "hsl");
</script>

<div>
    <button
        on:click={click}
        style="
            --background-color: {backgroundColor};
            --hover-color: {hoverColor};
        "
    >
        {label}
    </button>
</div>

<style lang="scss">
    button {
        @apply w-full h-8 rounded;
        background-color: var(--background-color);
    }

    button:hover {
        background-color: var(--hover-color);
    }
</style>
