<template>
  <div id="app">
    <h1> img error: Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "image/png" </h1>
    <img alt="Vue logo" src="//cli.vuejs.org/favicon.png">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
