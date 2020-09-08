<template>
<div>

    <main>

        <div class="main-wrapper">
            <div data-bg="">
                <img class="profile-banner-large bg-img" src="~assets/images/banner/profile-banner.jpg" alt="profile picture">
            </div>
            <div class="profile-menu-area bg-white">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-3">
                            <div class="profile-picture-box">
                                <figure class="profile-picture">
                                    <a href="profile.html">
                                        <img src="~assets/images/profile/profile-1.jpg" alt="profile picture">
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 offset-lg-1">
                            <div class="profile-menu-wrapper">
                                <div class="main-menu-inner header-top-navigation">
                                    <nav>
                                        <ul class="main-menu">
                                            <li v-for="link in links" :key="link.route">
                                                <nuxt-link :to="{ name: link.route }">{{ link.title }}</nuxt-link>
                                            </li>

                                            <!-- <li class="d-inline-block d-md-none"><a href="profile.html">edit profile</a></li> -->
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 d-none d-md-block">
                            <div class="profile-edit-panel">
                                <button class="edit-btn">edit profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </main>
</div>
</template>

<script>
export default {
    layout: 'user',

    middleware: ['auth'],

    data() {

        return {
            links: [{
                    title: 'Timeline',
                    route: 'settings.dashboard'
                }, {
                    title: 'About',
                    route: 'settings.about'
                },

            ]
        }

    },

}
</script>

<style>

</style>
