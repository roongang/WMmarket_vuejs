<template>
    <div v-if="isLogin">
        <h2>로그인 유저 정보</h2>
        <p>아이디 : {{ getId }}</p>
        <p>이메일 : {{ getEmail }}</p>
        <p>닉네임 : {{ getNickname }}</p>
    </div>
    <div v-else>
        <h2>로그인 안된 유저</h2>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default{
    name : 'LoginUserInfo',
    data(){
        return {
            user:{
                id:'',
                email:'',
                nickname:''
            }
        }
    },
    computed : {
        ...mapGetters('userStore',['isLogin','getId','getEmail','getNickname']),
    },
}
</script>