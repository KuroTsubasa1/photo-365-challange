export default {

    baseUrl: 'https://pocket.lasseharm.space',
    verifyUserUrl: '/api/collections/users/confirm-verification',

    checkUserLoggedIn: function (token) {

        if (typeof token === 'undefined') {
            return {
                code: 400,
                message: "Failed to authenticate. Missing required value.",
            }
        }

        fetch(this.baseUrl + this.verifyUserUrl,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    //'Content-Type': 'application/json'
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: new URLSearchParams({
                    token: token,
                })
            })
            .then(r => {
                console.log(r)
                return  r.json()
            })
            .then(json => {
                console.log(json)
            })
    }
}