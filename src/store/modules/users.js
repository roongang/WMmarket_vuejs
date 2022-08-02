import axiosService from "@/util/axiosService"
import { getCookie, deleteCookie } from "@/util/cookieService"
import { signupService, signinService, signoutService } from "@/services/user"

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
        if(getCookie('SESSION') != null) {
            console.log("already signed in");
            return;
        }
        await signinService(email,password);
        var session = getCookie('SESSION');
        console.log("session :", session);
        commit('SIGNIN',{email,password,session});
    },
    async signup({commit},{email,password,nickname,role}) {
        await signupService(email,password,nickname,role);
    },
    async signout({commit}) {
        if(getCookie('SESSION') == null || state.session == null) {
            deleteCookie('SESSION')
            console.log("already signed out");
            return;
        }
        await signoutService();
        deleteCookie('SESSION')
        commit('SIGNOUT')
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