<template>
<div>
    <SIteNavigation />
    <main>

        <Nuxt />

    </main>

    <div class="scroll-top not-visible">
        <i class="bi bi-finger-index"></i>
    </div>
</div>
</template>

<script>
import SIteNavigation from './partials/Navigation'
import SIteFooter from './partials/Footer'
import LeftSidebar from './partials/LeftSidebar'
import RightSideBar from './partials/RightSideBar'
export default {

    components: {

        SIteNavigation,
        SIteFooter,
        LeftSidebar,
        RightSideBar
    }
}
</script>

<style>

</style>
