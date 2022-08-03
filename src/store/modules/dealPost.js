import { saveDealPostService } from "@/services/dealPost";

const state={}
const getters={}
const mutations={}
const actions={
    async saveDealPost({commit},{title,content,category,price,files}) {
        await saveDealPostService(title,content,category,price,files);
    }
}

const dealPostStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
export default dealPostStore
