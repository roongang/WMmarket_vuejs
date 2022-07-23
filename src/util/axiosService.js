import axios from 'axios'

const herokuBackendUrl = 'https://wm-market.herokuapp.com/api/v1'

const axiosService = axios.create({
    baseURL: process.env.VUE_APP_URL_API || herokuBackendUrl,
    withCredentials: true
})

export default axiosService;