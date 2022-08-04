import { saveDealPostService, getDealPostPageService } from "@/services/dealPost";

const state={}
const getters={}
const mutations={}
const actions={
    async saveDealPost({commit},{title,content,category,price,files}) {
        await saveDealPostService(title,content,category,price,files);
    },
    async getDealPostPage({commit},{page,size}) {
        return getDealPostPageService(page,size);
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
