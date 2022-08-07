import { getCookie, deleteCookie } from "@/util/cookieUtil";
import { signupService, signinService, signoutService, getUserService } from "@/services/user"

const state={
    id: null,
    email: null,
    password: null,
    nickname: null,
    role: null,
    sessionId: null
}
const getters={
    getId(state) {
        return state.id;
    }
}
const mutations={
    SIGNIN(state,{id,email,password,sessionId}) {
        state.id = id;
        state.email = email
        state.password = password
        state.sessionId = sessionId
    },
    SIGNOUT(state) {
        state.id = null;
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
        const userRes = await getUserService(null,email,null);
        const id=userRes.data.data.id;
        console.log("sessionId :", sessionId);
        commit('SIGNIN',{id,email,password,sessionId});
    },
    async signup({commit},{email,password,nickname,role}) {
        await signupService(email,password,nickname,role);
    },
    async signout({commit}) {
        if(getCookie('SESSION') == null && state.sessionId == null) {
            deleteCookie('SESSION')
            console.log("already signed out");
        } else {
            await signoutService();
            deleteCookie('SESSION')
            commit('SIGNOUT')
        }
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