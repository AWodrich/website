<template>
    <div
        id="app"
        class="main-page"
    >
        <base-layout>
            <template v-slot:header>
                Some header content
                <Main />
            </template>
        </base-layout>

        <MousePosition />
    </div>
</template>

<script>
import Main from './components/Main.vue'
import MousePosition from './components/MousePosition.vue'
import BaseLayout from './components/BaseLayout.vue'

export default {
    name: 'App',
    components: {
        Main,
        MousePosition,
        'base-layout': BaseLayout,
    },
}
</script>

<style lang="scss">

    .main-page {
        border: 2px solid red;
        height: 100%;
        width: 100%;
    }
</style>
