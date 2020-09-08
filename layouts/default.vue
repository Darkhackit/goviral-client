<template>
<div>
    <SIteNavigation />
    <main>

        <div class="main-wrapper pt-80">
            <div class="container">

                <div class="row">
                    <LeftSidebar />

                    <div class="col-lg-6 order-1 order-lg-2">
                        <Nuxt />
                    </div>
                    <RightSideBar />

                </div>

            </div>

        </div>

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
