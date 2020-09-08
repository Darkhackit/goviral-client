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
                        <h3>Get more things done with Loggin platform.</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
                        <div class="page-links">
                        <nuxt-link to="/login" class="active">Login</nuxt-link><nuxt-link to="/register">Register</nuxt-link>

                        </div>
                        <form @submit.prevent="submit">
                        <alert-error v-if="form.errors.has('verification')" :form="form">
                        {{ form.errors.get('verification') }}

                        <nuxt-link :to="{name:'verification.resend'}">Resend verification email</nuxt-link>
                        </alert-error>
                            <has-error :form="form" field="email"></has-error>
                            <input class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" type="email" name="email" placeholder="E-mail Address"  v-model.trim="form.email">
                            <has-error :form="form" field="password"></has-error>
                            <input class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" type="password" name="password" placeholder="Password" v-model="form.password">
                             <nuxt-link :to="{ name:'password.email' }">Forgot password</nuxt-link>
                             <base-button :loading="form.busy">
                             Login
                             </base-button>
                           <!--  <div class="form-button" :disabled="form.busy">
                                <button id="submit" type="submit" class="ibtn">
                                <span v-if="form.busy">  <i class="fas fa-spinner fa-spin"></i></span>

                                Login
                                </button>
                            </div> -->
                        </form>
                        <div class="other-links">
                            <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                        </div>
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

  middleware: ['guest'],

  data() {

    return {

      form: this.$vform({

        email: "",
        password: ""
      })
    }
  },

  methods: {
    submit(){

      this.$auth.loginWith('local',{
        data: this.form
      }).then( res => {

        console.log(res)
      })
      .catch(e => {

        this.form.errors.set(e.response.data.errors)
      })

    }
  },
}
</script>

<style>

</style>

