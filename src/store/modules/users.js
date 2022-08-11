import { getCookie, deleteCookie } from "@/util/cookieUtil";
import { createImageUrl } from "@/util/imageUtil";
import { signupService, signinService, signoutService, getUserService, getUserImageService } from "@/services/user"

const state={
    id: null,
    email: null,
    password: null,
    nickname: null,
    role: null,
    imageUrl: null,
    sessionId: null
}
const getters={
    isLogin(state) {
        return state.sessionId != null;
    },
    getId(state) {
        return state.id;
    },
    getEmail(state) {
        return state.email;
    },
    getNickname(state) {
        return state.nickname;
    },
    getImageUrl(state) {
        return state.imageUrl;
    }
}
const mutations={
    SIGNIN(state,{id,email,password,nickname,imageUrl,sessionId}) {
        state.id = id;
        state.email = email;
        state.password = password;
        state.nickname = nickname;
        state.imageUrl = imageUrl;
        state.sessionId = sessionId;
    },
    SIGNOUT(state) {
        state.id = null;
        state.email = null;
        state.password = null;
        state.image = null;
        state.sessionId = null;
    }
}
const actions={
    async signin({commit},{email,password}) {
        if(state.sessionId != null) {
            console.log("already signed in");
            return;
        }
        await signinService(email,password);
        var sessionId = getCookie('SESSION');
        const userRes = await getUserService(null,email,null);
        const userData = userRes.data.data;
        const id=userData.id;
        const nickname=userData.nickname;
        const imageRes = await getUserImageService(id);
        const contentType=imageRes.headers["content-type"];
        const imageUrl = (contentType.includes('image/')) ? createImageUrl(imageRes) : null;
        commit('SIGNIN',{id,email,password,nickname,imageUrl,sessionId});
    },
    async signup({commit},{email,password,nickname,role,image}) {
        await signupService(email,password,nickname,role,image);
    },
    async signout({commit}) {
        if(getCookie('SESSION') == null && state.sessionId == null) {
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