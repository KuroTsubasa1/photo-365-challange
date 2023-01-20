//
import {useUserAuthStore} from '@/stores/userAuth'

export default defineNuxtRouteMiddleware(async (to, from) => {

    const userAuth = useUserAuthStore()
    const loginUrl = '/login'
    const rootUrl = '/'
    const promptUrl = '/prompt-of-the-day'
    const tokenUrl = "https://pocket.lasseharm.space/api/collections/users/auth-refresh"

    const tokenStatus = getTokenStatus()
    const isAuthenticatedStatus = getIsAuthenticatedStatus()
    
    // catch redirect infinite loop
    if ([loginUrl].includes(to.path)) return

    // log user in
    // redirect to requested page
    if (tokenStatus && isAuthenticatedStatus) {
       
            
            const status = await getNewAuthToken()
            if (!status) return navigateTo(loginUrl)
            if ([loginUrl].includes(to.path)) return navigateTo(rootUrl)
        
        
        if ([loginUrl].includes(to.path)) return navigateTo(rootUrl)
        return
    }
    
    // check if token is still valid
    // if it is log user in
    // else redirect to login
    if (tokenStatus && !isAuthenticatedStatus) {
        const status = await getNewAuthToken()
        if ([rootUrl, promptUrl].includes(to.path)) return
        if (!status) return navigateTo(loginUrl)
        if (to.path === loginUrl) return navigateTo(rootUrl)
        return
    }

    // this should not be possible
    // you can not be logged in without any token
    if (!tokenStatus && isAuthenticatedStatus) {
        console.error("ERROR: 666 | This can not be !")
        return navigateTo(loginUrl)
    }

    if ([rootUrl, promptUrl].includes(to.path)) return
    
    // this user has to authenticate
    if (!tokenStatus && !isAuthenticatedStatus) {
        return navigateTo(loginUrl)
    }
    
    async function getNewAuthToken() {

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
                isAuthenticated: true,
                id: data.record.id,
                email : data.record.email,
                username: data.record.username,
                collection: data.record.collectionId,
                avatar: data.record.avatar
            })

        localStorage.setItem("auth_token", data.token)
        return true

    }

    function getTokenStatus() {
        return !!userAuth.token;
    }

    function getIsAuthenticatedStatus() {
        return !!userAuth.isAuthenticated;
    }
})

