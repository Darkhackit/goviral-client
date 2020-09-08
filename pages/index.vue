<template>
<div>
    <div class="card card-small" v-if="$auth.loggedIn">
        <div class="share-box-inner">
            <!-- profile picture end -->
            <div class="profile-thumb">
                <a href="#">
                    <figure class="profile-thumb-middle">
                        <img src="assets/images/profile/profile-small-37.jpg" alt="profile picture">
                    </figure>
                </a>
            </div>
            <!-- profile picture end -->

            <!-- share content box start -->
            <div class="share-content-box w-100">

                <form class="share-text-box">
                    <textarea name="share" class="share-text-field" aria-disabled="true" placeholder="Say Something" data-toggle="modal" data-target="#textbox" id="email"></textarea>
                    <button class="btn-share" type="submit">share</button>

                </form>

            </div>
            <!-- share content box end -->

            <!-- Modal start -->
            <div class="modal fade" id="textbox" aria-labelledby="textbox">
                <div class="modal-dialog">
                    <form class="share-text-box" enctype="multipart/form-data">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Share Your Mood</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body custom-scroll">
                                <dropzone v-on:vdropzone-sending="sendingEvent" id="foo" ref="el" name="image[]" :options="options" :destroyDropzone="true"></dropzone>
                                <!-- <file-pond ref="pond"  class="filepond" name="images[]" allowFileEncode="true"  v-on:init="handleFilePondInit"  class-name="my-pond" v-bind:allow-multiple="true"/> -->
                                <label>Description</label>
                                <textarea name="" id="" cols="5" rows="5" class="form-control" v-model="description"></textarea>

                                <label for="">Tags</label>
                                <client-only>
                                    <better-input-tag :tags="tags" placeholder="Tags seperated by comma" on-paste-delimiter=","></better-input-tag>
                                </client-only>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="post-share-btn" data-dismiss="modal">cancel</button>
                                <button type="button" class="post-share-btn" @click.prevent="processQueue">post</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <!-- Modal end -->

        </div>
    </div>

</div>
</template>

<script>
import BetterInputTag from 'better-vue-input-tag'
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {
    data() {
        return {

            options: {
                url: "http://example.com",
                autoProcessQueue: false,
                addRemoveLinks: true,
                uploadMultiple: true,
                parallelUploads: 100,
                maxFiles: 100,
            },
            description: '',
            tags: [],
        }
    },
    methods: {
        processQueue() {

            this.$refs.el.processQueue()

            // this.$axios.post('/designs',this.form)
            // .then(res => {
            //   console.log(res)
            // })
            // .catch(err => {
            //   console.log(err)
            // })
        },
        sendingEvent(file, xhr, formData) {
            formData.append('description', this.description);
            formData.append('tags', this.tags)

            this.$axios.post('/designs', formData)
                .then(res => {

                    console.log(res)
                })
        }
    },
    computed: {

    },
    async asyncData({
        $axios,
        params,
        error,
        redirect
    }) {

    },
    mounted() {
        // Everything is mounted and you can access the dropzone instance
        if (this.$auth.loggedIn) {
            const instance = this.$refs.el.dropzone
        }

    },

    components: {

        BetterInputTag,
        Dropzone
    }

}
</script>

<style>

</style>
