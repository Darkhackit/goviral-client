<template>
  <div>

  <div class="form-button">
      <button id="submit" :type="nativeType" class="ibtn" :disabled="loading">
        <span v-if="loading">
         <i class="fas fa-spinner fa-spin"></i>
         </span>
      <slot/>
      </button>
  </div>

  </div>
</template>

<script>
export default {

name : 'base-button',
props: {

  nativeType: {

    type: String,
    default:'submit'
  },
  loading: {

    type: Boolean,
    default: false
  }
}
}
</script>

<style>

</style>
