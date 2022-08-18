<template>
    <div v-if="isLogin">
        <h2>로그인 유저 정보</h2>
        <p>아이디 : {{ userId }}</p>
        <p>이메일 : {{ userEmail }}</p>
        <p>닉네임 : {{ userNickname }}</p>
        <p>사진 : 
            <img v-if="userImageUrl" v-bind:src="userImageUrl" style="width:30%">
        </p>
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
        ...mapGetters('userStore',['isLogin','userId','userEmail','userNickname','userImageUrl']),
    },
}
</script>