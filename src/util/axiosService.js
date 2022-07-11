import axios from 'axios'

const axiosService = axios.create({
    baseURL: process.env.ROOT_API,
    withCredentials: true
})

export default axiosService;