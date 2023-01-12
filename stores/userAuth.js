// stores/userAuth.js
import {defineStore} from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useUserAuthStore = defineStore('userAuth', {
    state: () => ({
        token: useLocalStorage('auth_token', null),
        username: null,
        id: null,
        email: null,
        isAuthenticated : false,
    }),
    getters: {
    },

    hydrate(state, initialState) {
        // in this case we can completely ignore the initial state since we
        // want to read the value from the browser
        state.user = useLocalStorage('auth_token', false)
    },
})
