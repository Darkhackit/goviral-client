<template>
  <div>

  <input :placeholder="placeholder" :type="type" :class="{ 'is-invalid': form.errors.has(field) }" class="form-control" @input="handleInput" :value="value"/>
   <has-error :form="form" :field="field"></has-error>

  </div>
</template>
<script>
export default {

  name: 'base-input',
  props: {

    form: {
      type: Object,
      required: true
    },

    field: {

      type: String,
       required: true
    },

    value: {

      type: String,
      default: ''
    },

    placeholder: {

      type: String,
      default: ''
    },
    type: {

      type:String,
      default: 'text'
    }
  },

  methods: {

    handleInput(e) {

      this.$emit('input' , e.target.value)
    }
  },

  mounted(){

    console.log(this.$attrs)
  }

}
</script>

<style>

</style>
