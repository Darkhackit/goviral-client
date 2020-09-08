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
                        <h3>PASSWORD RESET</h3>
                        <p>Access to the most powerfull tool in the entire design and web industry.</p>
                        <div class="page-links">
                        <nuxt-link to="/login" class="">Login</nuxt-link><nuxt-link to="/register">Register</nuxt-link>

                        </div>
                        <form @submit.prevent="submit">
                        <alert-success :form="form">
                        {{ status }}

                        <p>
                        <nuxt-link to="/login">Proceed to login</nuxt-link>
                        </p>
                        </alert-success>

                            <base-input placeholder="E-mail Address" v-model.trim="form.email" type="email" :form="form" field="email"></base-input>
                               <base-input placeholder="Password" v-model.trim="form.password" type="password" :form="form" field="password"></base-input>



                               <base-button :loading="form.busy">
                            Reset Password
                             </base-button>
                            <!-- <div class="form-button" :disabled="form.busy">
                                <button id="submit" type="submit" class="ibtn">
                                <span v-if="form.busy">  <i class="fas fa-spinner fa-spin"></i></span>

                                Reset Password
                                </button>
                            </div> -->

                         <div class="other-links">
                            <span></span><nuxt-link :to="{ name: 'login' }">Back to login</nuxt-link>
                        </div>
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
   middleware: ['guest'],

  data() {

    return {

      status: '',
      form: this.$vform({

        email: "",
        password: '',
        password_confirmation: "",
        token: ''

      })
    }
  },

  methods: {

    submit(){

      this.form.post(`/password/reset`)
      .then(res => {

        this.status = res.data.status
       this.form.reset()
      })
      .catch(error => {

        console.log(error)
      })
    }
  },

  created(){

    this.form.email = this.$route.query.email;
    this.form.token = this.$route.params.token
  }
}
</script>

<style>

</style>

