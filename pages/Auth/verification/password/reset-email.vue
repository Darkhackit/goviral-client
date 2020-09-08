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
                        </alert-success>
                        <base-input placeholder="E-mail Address" v-model="form.email" :form="form" field="email"></base-input>
                            <!--   <input class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" type="email" name="email" placeholder="E-mail Address"  v-model.trim="form.email">
                             <has-error :form="form" field="email"></has-error> -->

                            <base-button :loading="form.busy">
                            Send Password Reset Link
                             </base-button>
                         <!--    <div class="form-button" :disabled="form.busy">
                                <button id="submit" type="submit" class="ibtn">
                                <span v-if="form.busy">  <i class="fas fa-spinner fa-spin"></i></span>

                                Send Password Reset Link
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

      })
    }
  },

  methods: {

    submit(){

      this.form.post(`/password/email`)
      .then(res => {

        this.status = res.data.status
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

