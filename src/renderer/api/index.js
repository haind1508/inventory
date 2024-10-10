import axios from 'axios'

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
        return response
    },
    (error) => {
        return error
    }
)

export default api
