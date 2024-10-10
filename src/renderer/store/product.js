import { defineStore } from 'pinia'
import { initPinia } from '@/store/setup'
import api from '@/api'

const createStore = defineStore('product', {
    state: () => {
        return {
            search: {

            },

        }
    },
    getters: {
        
    },
    actions: {
        async index(params) {
            return await api.get(`/products`, { params: params })
                .then((res) => {
                    return res.data
                })
                .catch((error) => {
                    return false
                })
        },
        async store(payload) {
            return await api.post(`/products`, payload)
                .then((res) => {
                    return res.data
                })
                .catch((error) => {
                    return false
                })
        }
    },
})

export const productStore = createStore(initPinia)
export const useProductStore = () => {
    return productStore
}
