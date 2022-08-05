import { saveDealPostService, getDealPostPageService, getDealPostService } from "@/services/dealPost";

const state={}
const getters={}
const mutations={}
const actions={
    async saveDealPost({commit},{title,content,category,price,files}) {
        await saveDealPostService(title,content,category,price,files);
    },
    async getDealPostPage({commit},{page,size}) {
        return await getDealPostPageService(page,size);
    },
    async getDealPost({commit},{id}) {
        return await getDealPostService(id);
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
