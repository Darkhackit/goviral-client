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

                <div class="card" style="width:300px">

                <div class="alert alert-success" v-if="success">
                {{ status }}
                </div>

                 <div class="alert alert-danger" v-else>
                 {{ status }}
                 </div>
                <div class="card-body">

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

  async asyncData({params, query,app}) {

    const q = Object.keys(query).map(k =>  `${k}=${query[k]}`).join('&');

    try{

      const {data} = await app.$axios.post(`verification/verify/${params.id}?${q}`)

       return {success:true ,status:data.message}
    }

    catch (e) {

      return {success:false , status: e.response.data.errors.message}
    }

  },
}
</script>

<style>

</style>

