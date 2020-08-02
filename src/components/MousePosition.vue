<template>
<div class="mouse-pointer">
    <svg
        :style="`transform: translateX(${x}px) translateY(${y}px);`"
        width="220"
        height="220"
        viewBox="0 0 220 220"
        class="mouse-pointer__svg"
    >
        <defs>
            <filter
                id="filter-1"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="objectBoundingBox"
            >
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0"
                    numOctaves="1"
                    result="warp"
                ></feTurbulence>
                <feOffset
                    dx="-30"
                    result="warpOffset"
                ></feOffset>
                <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    scale="30"
                    in="SourceGraphic"
                    in2="warpOffset"
                ></feDisplacementMap>
            </filter>
        </defs>
        <circle
            fill="transparent"
            stroke="black"
            stroke-width="1"
            cx="110"
            cy="110"
            r="4"
            class="mouse-pointer__inner"
        ></circle>
    </svg>

</div>
</template>

<script>
import { useMousePosition } from "../useMousePosition";

export default {
    name: 'MousePosition',

    setup() {
        const { x, y } = useMousePosition();
        return { x, y };
    }
}
</script>

<style lang="scss">

    .mouse-pointer {
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 1;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;

        &__svg {
            position: absolute;
        }

        &__label {
            overflow: hidden;
            pointer-events: none;

            &__description {
                transform: translateY(100%);
                transition: all .3s cubic-bezier(.4,-.01,.325,.99);
                transition-delay: .1s;
                display: block;
            }
        }
    }

</style>