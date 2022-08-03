import userStore from '@/store/modules/users.js'
import dealPostStore from '@/store/modules/dealPost.js'

const storeData = { modules : {
    userStore : userStore,
    dealPostStore : dealPostStore
}}

export default storeData.modules