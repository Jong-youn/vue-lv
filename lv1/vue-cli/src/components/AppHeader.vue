<template>
  <header>
      <h1>{{ propsdata }}</h1>
      <button v-on:click="sendEvent">C L I C K</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew')
        }
    }
}
</script>

<style>

</style>