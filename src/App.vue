<template>
  <div id="app">
    <Header></Header>
    <br>
    <router-link to="/">main</router-link>
    <router-link to="/login">login</router-link>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Header: () => import('@/components/common/Header'),
    Footer: () => import('@/components/common/Footer'),
  }
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
