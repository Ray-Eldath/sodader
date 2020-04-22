<template>
    <transition
        :duration="{ enter: 300, leave: 400 }"
        name="custom-fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
    >
        <slot></slot>
    </transition>
</template>
<style>
    .custom-fade-enter-active {
        transition: opacity 500ms linear;
    }

    .custom-fade-leave-active {
        transition: opacity 400ms ease;
    }

    .custom-fade-enter,
    .custom-fade-leave-active {
        opacity: 0
    }
</style>

<script>
    export default {
        data() {
            return {
                prevHeight: 0
            };
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const { height } = getComputedStyle(element);
                element.style.height = this.prevHeight;
                setTimeout(() => {
                    element.style.height = height;
                });
            },
            afterEnter(element) {
                element.style.height = "auto";
            }
        },
        name: "FadeTransition"
    };
</script>