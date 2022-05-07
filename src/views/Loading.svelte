<div class="loading">
    <figure>
        <svg class="circular">
            <circle
                class="path"
                cx="50%"
                cy="50%"
                r="20%"
                fill="none"
                stroke-width="5"
                stroke="#ffffff"
            />
        </svg>
    </figure>
</div>

<style lang="scss">
    $size: 200;
    $dash: $size * 2;

    div.loading {
        @apply w-screen h-screen flex justify-center items-center;
        position: fixed;
        z-index: 100;
    }

    figure {
        width: #{$size}px;
        height: #{$size}px;
    }

    svg.circular {
        width: 100%;
        height: 100%;
        animation: rotate 2s linear infinite;

        circle {
            stroke-dasharray: 1, $dash;
            stroke-dashoffset: 0;
            stroke-linecap: round;
            animation: dash 1.5s ease-in-out infinite;
        }
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, $dash;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: $dash * 0.5, $dash;
            stroke-dashoffset: -($dash * 0.175);
        }
        100% {
            stroke-dasharray: $dash * 0.5, $dash;
            stroke-dashoffset: -($dash * 0.62);
        }
    }
</style>
