<template>
    <div class="loginComponent">
        <h1>로그인 컴포넌트 입니다</h1>
        <form class="loginForm">
            <p>
                <label for="emailInput">이메일 </label>
                <input type="text" id="userEmailInput" class="inputText" ref="userEmailInput" v-model.trim="user.email" placeholder="이메일을 입력해주세요">
            </p>
            <p>
                <label for="passwordInput">비밀번호 </label>
                <input type="password" id="userPasswordInput" class="inputText" ref="userPasswordInput" v-model.trim="user.password" placeholder="비밀번호를 입력해주세요">
            </p>
            <p>
                <label for="imageInput">이미지</label>
                <input type="file" v-on:change="onFileChange" accept="image/*">
                <img v-if="uploadedImage" v-bind:src="uploadedImage" style="width:30%">
            </p>
            <p class="buttons">
                <button @click.prevent="doSignin" class="buttonBlue">로그인</button>&nbsp;
                <button @click.prevent="doSignout" class="buttonBlue">로그아웃</button>&nbsp;
                <button @click.prevent="doSignup" class="buttonBlue">회원가입</button>&nbsp;
                <button @click.prevent="doCancel" class="button">취소</button>&nbsp;
            </p>
        </form>
        <p>{{error}}</p>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default{
    name:'Login',
    data () {
        return {
            user:{
                email:'',
                password:'',
                image:null,
            },
            uploadedImage:null,
            error:''
        }
    },
    methods:{
        async doSignin() {
            if(this.user.email == ""){
                alert("이메일 입력해주세요!!")
                return
            } else if(this.user.password == ""){
                alert("비밀번호 입력해주세요!!")
                return
            }
            await this.signin({
                email : this.user.email,
                password : this.user.password
            })
            this.clearForm();
        },
        async doSignup() {
            if(this.user.email == ""){
                alert("이메일 입력해주세요!!")
                return
            } else if(this.user.password == ""){
                alert("비밀번호 입력해주세요!!")
                return
            }
            await this.signup({
                email : this.user.email,
                password : this.user.password,
                nickname : this.user.email,
                role : 'USER',
                image : this.user.image
            })
        },
        doSignout() {
            if(document.cookie == null) console.log('로그인 되어있지 않음')
            else this.signout()
        }
        ,
        doCancel() {
            this.$router.push('/');
        },
        onFileChange(e) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onload = (e) => {
                this.uploadedImage = e.target.result
            }
            this.user.image=file;
            reader.readAsDataURL(file)
        },
        clearForm() {
            this.user.email = ''
            this.user.password = ''
            this.user.image = null
        },
        ...mapActions('userStore',['signin','signup','signout'])
    }
}
</script>

<style scoped>
</style>