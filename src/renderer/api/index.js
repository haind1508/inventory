import axios from 'axios'
import { store } from '@/store/'

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
    withCredentials: false,
    headers: {
        Accept: '*',
    },
})

api.interceptors.request.use((config) => {
    return config
})

api.interceptors.response.use(
    (response) => {
        if (![200, 201].includes(response?.data?.code)  && response?.config?.method != 'get' && response?.data?.code != 404) {
            store.showErrorModal(response?.data?.message)
        }
        
        return response
    },
    (error) => {
        return error
    }
)

export default api
