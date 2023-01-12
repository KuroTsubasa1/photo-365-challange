//
import {useUserAuthStore} from '@/stores/userAuth'

export default defineNuxtRouteMiddleware(async (to, from) => {


    const userAuth = useUserAuthStore()

    console.log("in middleware auth")

    if (['/login', '/prompt-of-the-day', '/'].includes(to.path)) return
    if (['/login'].includes(to.path) && userAuth.isAuthenticated) return navigateTo("/")
    if (userAuth.isAuthenticated) return

    const tokenUrl = "https://pocket.lasseharm.space/api/collections/users/auth-refresh"

    const status = await getNewAuthToken()
    
    if (!status) {
        return navigateTo('/login')
    }

    if (['/login', '/prompt-of-the-day'].includes(to.path)) {
        return navigateTo("/")
    }

    return navigateTo(to.path)

    async function getNewAuthToken() {

        console.log("token: " + userAuth.token)
        if (userAuth.token === false) {
            return false
        }

        const response = await fetch(tokenUrl,
            {
                method: "POST",
                headers: new Headers({
                    Authorization: 'Bearer ' + userAuth.token,
                }),
            })


        if (response.status !== 200) {
            return false;
        }

        const data = await response.json()

        userAuth.$patch(
            {
                token: data.token,
                isAuthenticated: true
            })

        localStorage.setItem("auth_token", data.token)

        return true

    }
})

