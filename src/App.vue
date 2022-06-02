<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button @click="recaptcha">Execute recaptcha</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async recaptcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded()

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha('login')
      console.log("token", token)

      // Do stuff with the received token.
    }
  },
}
</script>

<style>
</style>
