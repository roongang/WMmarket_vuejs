import { axiosService } from "@/util/axiosUtil"

const state={}
const getters={}
const mutations={}
const actions={
    async saveDealPost({commit},{title,content,category,price,images}) {
        let form=new FormData()
        form.append('title',title)
        form.append('content',content)
        form.append('category',category)
        form.append('price',price)
        console.log('images:',images)
        Object.values(images).forEach(file=>{
            form.append('files',file)
        })
        for(let image of images) {
            // form.append('files',image)
        }
        await axiosService
            .post('/deal-posts', form,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((res) => {
                console.log('action saveDealPost :')
                console.log(res)
            }).catch((err) => {
                console.log('saveDealPost error')
                console.log(err)
            })
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
