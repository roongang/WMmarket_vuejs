import axiosService from "@/util/axiosService"
import { getCookie, deleteCookie } from "@/util/cookieService"

const state={
    email: null,
    password: null,
    nickname: null,
    role: null,
    session: null
}
const getters={}
const mutations={
    SIGNIN(state,{email,password,session}) {
        state.email = email
        state.password = password
        state.session = session
    },
    SIGNOUT(state) {
        state.email = null
        state.password = null
        state.session = null
    }
}
const actions={
    async signin({commit},{email,password}) {
        await axiosService
            .post('/signin', {
                email, password
            })
            .then((res) => {
                console.log('action signin :')
                console.log(res)
                console.log('cookie :',document.cookie)
                var session = getCookie('SESSION')
                commit('SIGNIN',{email,password,session})
            }).catch((err) => {
                console.log('signin error')
                console.log(err)
            })
    },
    async signup({commit},{email,password,nickname,role}) {
        // Image가 포함되어 multipart/form-data 형태임
        let form=new FormData()
        form.append('email',email)
        form.append('password',password)
        form.append('nickname',nickname)
        form.append('role',role)

        await axiosService
            .post('/users', form)
            .then((res) => {
                console.log('action signup :')
                console.log(res)
            }).catch((err) => {
                console.log('signup error')
                console.log(err)
            })
    },
    async signout({commit}) {
        await axiosService
            .post('/signout')
            .then((res) => {
                console.log('action signout :')
                console.log(res)
                deleteCookie('SESSION')
                commit('SIGNOUT')
            }).catch((err) => {
                console.log('signout error')
                console.log(err)
            })
    },
}

const userStore={
    namespaced : true,
    state,
    getters,
    mutations,
    actions
}
export default userStore