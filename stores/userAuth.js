// stores/userAuth.js
import {defineStore} from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useUserAuthStore = defineStore('userAuth', {
    state: () => ({
        firstRequest: true,
        token: useLocalStorage('auth_token', null),
        username: null,
        id: null,
        email: null,
        isAuthenticated : false,
        collection: '',
        avatar: '',
    }),
    getters: {
    },

    hydrate(state, initialState) {
        // in this case we can completely ignore the initial state since we
        // want to read the value from the browser
        state.user = useLocalStorage('auth_token', false)
    },
})
