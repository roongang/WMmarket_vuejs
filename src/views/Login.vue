<template>
    <div class="login">
        <h1>로그인 컴포넌트 입니다</h1>
        <form class="loginForm">
            <p>
                <label for="emailInput">이메일</label>
                <input type="text" id="userEmailInput" class="inputText" ref="userEmailInput" v-model.trim="user.email" placeholder="이메일을 입력해주세요">
            </p>
            <p>
                <label for="passwordInput">비밀번호</label>
                <input type="password" id="userPasswordInput" class="inputText" ref="userPasswordInput" v-model.trim="user.password" placeholder="비밀번호를 입력해주세요">
            </p>
            <p class="buttons">
                <button @click.prevent="doLogin" class="buttonBlue">로그인</button>
                <button @click.prevent="doCancel" class="button">취소</button>
            </p>
        </form>
        <p>{{error}}</p>
    </div>
</template>
<script>
export default{
    name:'Login',
    // TODO : data는 store 로 변경해야함
    data () {
        return {
            user:{
                email:'',
                password:'',
            },
            error:''
        }
    },
    methods:{
        doLogin() {
            if(this.user.email == ""){
                alert("이메일 입력해주세요!!")
                return
            } else if(this.user.password == ""){
                alert("비밀번호 입력해주세요!!")
                return
            }
            alert('로그인 성공!')
        },
        doCancel() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
</style>