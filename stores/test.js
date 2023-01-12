// store.js
import { createGlobalState, useStorage } from '@vueuse/core'

export const useGlobalState = createGlobalState(
    () => useStorage('auth_token', null),
)