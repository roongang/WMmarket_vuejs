<template>
  <div id="app">
    <Header></Header>
    <router-link to="/">Home</router-link> &nbsp;
    <router-link to="/login">로그인</router-link>&nbsp;
    <router-link to="/dealPost/write">글쓰기</router-link>&nbsp;
    <router-view/>
    <Footer></Footer> 
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
export default {
    name: "App",
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
