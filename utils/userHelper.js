import {useUserAuthStore} from "~/stores/userAuth";
const router = useRouter()
const userAuth = useUserAuthStore()
export default {
    baseUrl: "https://pocket.lasseharm.space",
    apiUrl : "/api/files/",
    verifyUserUrl: "/api/collections/users/confirm-verification",
    promptUrl: "/api/collections/prompts/records",
    getUserUrl: "/api/collections/users/records",
    errorPromptId:  -1,

    promptErrorText: "There is no prompt of the day 😭",
    userErrorText: "No user found!",
    
    logoutUser: function ()
    {
        localStorage.removeItem("auth_token")
        userAuth.$reset()
        router.push(this.baseUrl)
    },
    
    dateToIso8601Format: function (date)
    {
        // supported format YYYY-MM-DDTHH:mm:ss.sssZ
        const dateParts = date.split('.')
        
        const year = new Date().getFullYear()
        
        return `${year}-${dateParts[1]}-${dateParts[0]}:00:00:00`
    },
    
    getPromptById: async function(id) {

        const filter = `?filter=(id='${id}')`
        const response = await fetch( this.baseUrl+this.promptUrl+filter,)

        if (response.status !== 200) {
            return {
                error: this.userErrorText
            }
        }

        let data = await response.json()

        if (data.items.length !== 1) {
            return {
                error: this.userErrorText
            }
        }
        return data.items[0]
    },
    
    getUserById: async function(id) {
        
        const filter = `?filter=(id='${id}')`
        const response = await fetch( this.baseUrl+this.getUserUrl+filter,)

        if (response.status !== 200) {
            return {
                error: this.userErrorText
            }
        }
        
        let data = await response.json()
        
        if (data.items.length !== 1) {
            return {
                error: this.userErrorText
            }
        }
        return data.items[0]
    },

    getCurrentDate: function () {
        let curr = new Date();
        curr = this.fillDateWithZeros(
            curr.getDate(),
            curr.getMonth() + 1
        );

        return `${curr.day}.${curr.month}`
    },

    getCurrentCalendarWeek: function (date) {
        const maxDays = 7;
        let weekObj = {};
        // check if date is set else get current week
        if (typeof date !== "undefined") {
        }

        let curr = new Date(); // get current date
        let first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week

        for (let index = 0; index < maxDays; index++) {
            let loopDate = new Date(curr.setDate(first + index));
            let zeroDate = this.fillDateWithZeros(
                loopDate.getDate(),
                loopDate.getMonth() + 1
            );

            weekObj[index] = {
                weekday: loopDate.toLocaleDateString("de-de", {weekday: "short"}),
                date:
                    zeroDate.day +
                    "." +
                    zeroDate.month,
            };
        }

        return weekObj
    },

    checkUserLoggedIn: function (token) {
        if (typeof token === "undefined") {
            return {
                code: 400,
                message: "Failed to authenticate. Missing required value.",
            };
        }

        fetch(this.baseUrl + this.verifyUserUrl, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                //'Content-Type': 'application/json'
                "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: new URLSearchParams({
                token: token,
            }),
        })
            .then((r) => {
                console.log(r);
                return r.json();
            })
            .then((json) => {
                console.log(json);
            });
    },

    fillDateWithZeros: function (day, month) {
        if (day < 10) {
            day = "0" + day;
        }

        if (month < 10) {
            month = "0" + month;
        }

        return {day: day, month: month};
    },


    getPromptOfTheDay: async function (day) {
        if (typeof day === "undefined") {
            let currentDate = new Date();
            let zeroDate = this.fillDateWithZeros(
                currentDate.getDate(),
                currentDate.getMonth() + 1
            );
            day = zeroDate.day + "." + zeroDate.month;
        }

        const filter = `?filter=(date='${day}')`;

        const response = await fetch(this.baseUrl + this.promptUrl + filter)

        if (response.status !== 200) {
            return {
                prompt:  this.promptErrorText,
                id: this.errorPromptId,
            }
        }

        let data = await response.json()

        if (data.items.length !== 1) {
            return {
                prompt:  this.promptErrorText,
                id: this.errorPromptId,
            }
        }
        
        if ( typeof  data.items[0].example_images === 'undefined' ||  data.items[0].example_images === null || typeof data.items[0].example_images.prompt_helper === 'undefined' )
        {
            data.items[0].example_images = {
                prompt_helper : [],
            }
        }
        
        return {
            prompt: data.items[0].prompt_text,
            id: data.items[0].id,
            helpers: data.items[0].example_images.prompt_helper,
        }
        
        
    },
};
