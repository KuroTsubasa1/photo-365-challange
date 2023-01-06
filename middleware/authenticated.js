export default defineNuxtRouteMiddleware((to) => {

    if (!localStorage.getItem("auth_token"))
    {
        return '/login'
    }
})