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

                        <nuxt-link to="/login">Login</nuxt-link><nuxt-link to="/register" class="active">Register</nuxt-link>

                        </div>
                        <form @submit.prevent="submit">
                        <alert-success :form="form">
                        We have sent you an email to activate your account
                        </alert-success>
                         <has-error :form="form" field="username"></has-error>
                            <input class="form-control" :class="{ 'is-invalid': form.errors.has('username') }"
                             type="text"
                              name="username" placeholder="Username"  v-model.trim="form.username" required>
                              <has-error :form="form" field="name"></has-error>
                            <input class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" type="text" name="name" placeholder="Full Name"  v-model.trim="form.name" required>
                            <has-error :form="form" field="email"></has-error>
                            <input class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" type="email" name="email" placeholder="E-mail Address"  v-model.trim="form.email" required>
                            <has-error :form="form" field="password"></has-error>
                            <input class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" type="password" name="password" placeholder="Password"  v-model="form.password" required>
                             <has-error :form="form" field="password_confirmation"></has-error>
                            <input class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" type="password" name="password_confirmation" placeholder="Password Confirm"  v-model="form.password_confirmation" required>
                               <base-button :loading="form.busy">
                         Register
                             </base-button>
                          <!-- <div class="form-button" :disabled="form.busy">
                                <button id="submit" type="submit" class="ibtn">
                                <span v-if="form.busy">  <i class="fas fa-spinner fa-spin"></i></span>

                                Register
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
   middleware: ['guest'],

  data(){

    return {

      form: this.$vform({

        username: '',
        name: '',
        email:'',
        password:'',
        password_confirmation:''
      })
    }
  },

  methods: {

    submit(){

      this.form.post(`/register`)
      .then(res => {

        // console.log(res)
        this.form.reset();
      })
      .catch(error => {

        console.log(error)
      })
    }
  }
}
</script>
<style>

</style>
