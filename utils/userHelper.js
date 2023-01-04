export default {
  baseUrl: "https://pocket.lasseharm.space",
  verifyUserUrl: "/api/collections/users/confirm-verification",
  promptUrl: "/api/collections/prompts/records",

  promptErrorText: "There is no prompt of the day 😭",

  getCurrentCalendarWeek: function (date) {
    const maxDays = 7;
    let weekObj = {};
    // check if date is set else get current week
    if (typeof date !== "undefined") {
    }

    let curr = new Date(); // get current date
    let first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6

    for (let index = 0; index < maxDays; index++) {
      let loopDate = new Date(curr.setDate(first + index));
      let day = "";
      let month = "";

      let zeroDate = this.fillDateWithZeros(
        loopDate.getDay(),
        loopDate.getMonth() + 1
      );

      weekObj = {
        weekday: loopDate.toLocaleDateString("de-de", { weekday: "short" }),
        date:
          zeroDate.day+
          "." +
          zeroDate.month,
      };
    }

    return [weekObj]
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

    return { day: day, month: month };
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
    
    if(response.status != 200)
    {
        return this.promptErrorText
    }
    
    let data = await response.json()

    if(data.items.length != 1)
    {
        return this.promptErrorText
    }

    return data.items[0].prompt_text;
  },
};
