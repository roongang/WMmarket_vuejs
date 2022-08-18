<template>
  <div class="header">
    <img id="logoImg" src="@/assets/logo.png">
    <p>{{ msg }}</p>
    <!-- 유저 정보 -->
    <LoginUserInfo></LoginUserInfo>
    <!-- 거래글 검색창 -->
    <DealPostSearch></DealPostSearch>
  </div>
</template>

<script>
import LoginUserInfo from '@/components/LoginUserInfo.vue'
import DealPostSearch from '../DealPostSearch.vue';

export default {
  name : 'Header',
  data () {
    return {
      msg: 'THIS IS HEADER',
    }
  },
  components : {
    LoginUserInfo,
    DealPostSearch
  },
}
</script>

<style>
#logoImg {
  width: 30%; 
}
</style>