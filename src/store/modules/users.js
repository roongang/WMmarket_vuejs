import { getCookie, deleteCookie } from "@/util/cookieUtil";
import { signupService, signinService, signoutService } from "@/services/user"

const state={
    email: null,
    password: null,
    nickname: null,
    role: null,
    sessionId: null
}
const getters={}
const mutations={
    SIGNIN(state,{email,password,sessionId}) {
        state.email = email
        state.password = password
        state.sessionId = sessionId
    },
    SIGNOUT(state) {
        state.email = null
        state.password = null
        state.sessionId = null
    }
}
const actions={
    async signin({commit},{email,password}) {
        if(getCookie('SESSION') != null) {
            console.log("already signed in");
            return;
        }
        await signinService(email,password);
        var sessionId = getCookie('SESSION');
        console.log("sessionId :", sessionId);
        commit('SIGNIN',{email,password,sessionId});
    },
    async signup({commit},{email,password,nickname,role}) {
        await signupService(email,password,nickname,role);
    },
    async signout({commit}) {
        if(getCookie('SESSION') == null || state.sessionId == null) {
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