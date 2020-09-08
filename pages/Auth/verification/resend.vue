<template>
  <div>

    <div class="form-body container-fluid">
        <div class="website-logo">
            <a href="index.html">
                <div class="logo">
                    <img class="logo-size" src="images/logo-light.svg" alt="">
                </div>
            </a>
        </div>
        <div class="row">
            <div class="img-holder">
                <div class="bg"></div>
                <div class="info-holder">

                </div>
            </div>
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>RESEND VERIFICATION EMAIL</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
                        <div class="page-links">
                        <nuxt-link to="/login" class="">Login</nuxt-link><nuxt-link to="/register">Register</nuxt-link>

                        </div>
                        <form @submit.prevent="submit">

                      <alert-error v-if="form.errors.has('message')" :form="form">
                        {{ form.errors.get('message') }}
                        </alert-error>
                        <alert-success :form="form">
                        We have send the verification email
                        </alert-success>
                            <input class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" type="email" name="email" placeholder="E-mail Address"  v-model.trim="form.email">
                             <has-error :form="form" field="email"></has-error>
                             <base-button :loading="form.busy">
                          Resend
                             </base-button>

                          <!--   <div class="form-button" :disabled="form.busy">
                                <button id="submit" type="submit" class="ibtn">
                                <span v-if="form.busy">  <i class="fas fa-spinner fa-spin"></i></span>

                                Resend
                                </button>
                            </div> -->
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'normal',

  data() {

    return {

      form: this.$vform({

        email: "",

      })
    }
  },

  methods: {

    submit(){

      this.form.post(`/verification/resend`)
      .then(res => {

       this.form.reset()
      })
      .catch(error => {

        console.log(error)
      })
    }
  },
}
</script>

<style>

</style>

