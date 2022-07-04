<template>
<div class="header">
  <img id="logoImg" src="@/assets/logo.png">
  <p>{{ msg }}</p>
</div>
</template>

<script>
export default {
  name : 'Header',
  data () {
    return {
      msg: 'THIS IS HEADER'
    }
  }
}
</script>

<style>
#logoImg {
  width: 30%; 
}
</style>