<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- named routes로 Header.vue 추가 -->
    <br>
    <router-link to="/login">go to login</router-link>
    <router-view/>
    <!-- named routes로 Footer.vue 추가 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
