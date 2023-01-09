export default  defineNuxtRouteMiddleware(async (to,from) => {
    
    const tokenUrl = "https://pocket.lasseharm.space/api/collections/users/auth-refresh"
    
    const status = await getNewAuthToken()
    
    if (!status)
    {
        return navigateTo('/login')
    }

    async function getNewAuthToken()
    {
        if (!localStorage.getItem("auth_token"))
        {
            return false
        }

        const response = await fetch(tokenUrl,
            {
                method: "POST",
                headers: new Headers({
                    'Authorization': ''+localStorage.getItem("auth_token"),
                }),
            })
        

        if (response.status !== 200)
        {
            return false;
        }

        const data = await response.json()
        localStorage.setItem("auth_token",data.token)


        return true

    }
    
    
    
    // return navigateTo(to.path)
})

