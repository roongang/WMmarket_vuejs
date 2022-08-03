import axios from 'axios'

const herokuBackendUrl = 'https://wm-market.herokuapp.com/api/v1'
const localBackendUrl = 'http://localhost:8080/api/v1'
const proxyBackendUrl = '/api/v1'

const axiosService = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? herokuBackendUrl : proxyBackendUrl,
    withCredentials: true
})

export { axiosService }