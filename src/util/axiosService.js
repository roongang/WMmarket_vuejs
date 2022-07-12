import axios from 'axios'

const herokuBackendUrl = 'https://wm-market.herokuapp.com/api/v1'
const localBackendUrl = 'http://localhost:8080/api/v1'

const axiosService = axios.create({
    baseURL: herokuBackendUrl,
    withCredentials: true
})

export default axiosService;