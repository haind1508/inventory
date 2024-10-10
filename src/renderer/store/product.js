import { defineStore } from 'pinia'
import { initPinia } from '@/store/setup'
import api from '@/api'

const initSearch = {
    name: null,
    SKU: null,
}

const createStore = defineStore('product', {
    state: () => {
        return {
            search: {
                sort: null,
                sort_by: 'asc',
                ...initSearch
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
        },

        // mutation
        setSearch() {
            this.search.sort = null
            this.search.sort_by = 'asc'
        },
        resetSearch() {
            this.search = {...this.search, ...initSearch}
        },
    },
})

export const productStore = createStore(initPinia)
export const useProductStore = () => {
    return productStore
}
