<template>
<div class="header">
  <img id="logoImg" src="@/assets/logo.png">
  <p>{{ msg }}</p>
  <LoginUserInfo></LoginUserInfo>
</div>
</template>

<script>
import LoginUserInfo from '@/components/LoginUserInfo.vue'
export default {
  name : 'Header',
  data () {
    return {
      msg: 'THIS IS HEADER',
    }
  },
  components : {
    LoginUserInfo,
  },
}
</script>

<style>
#logoImg {
  width: 30%; 
}
</style>