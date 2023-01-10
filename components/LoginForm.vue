<template>
  <div
      class="container bg-dark d-flex flex-column mt-5 mt-0-xl justify-content-center align-content-center flex-wrap flex-xl-nowrap p-5"
  >
    <h1>Login</h1>

    <div class="flex-row mb-3">
      <span> Email </span>
      <input
          v-model="username"
          class="form-control text-white"
          type="text"
          name=""
          id=""
      />
    </div>

    <div class="flex-row mb-3">
      <span> Password </span>
      <input
          v-model="password"
          class="form-control text-white"
          type="password"
          name=""
          id=""
      />
    </div>

    <div class="flex-row mb-3 text-danger">
      <label for="none" class="col-sm-12 col-form-label">{{ login_error }}</label>
    </div>

    <div class="flex-row mb-3">
      <input
          v-on:click="tryLogin"
          type="button"
          class="form-control btn btn-dark"
          id="inputSend"
          value="Login"
      />
    </div>
  </div>
</template>

<script>
var link = "https://pocket.lasseharm.space/api/collections/users/auth-with-password";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      login_error: " ",
    };
  },
  methods: {
    debug: function () {
    },

    tryLogin: function () {
      this.login_error = " ";

      let data = {
        identity: this.username,
        password: this.password,
      };

      fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((json) => {
            if (typeof json.code !== "undefined") {
              switch (json.code) {
                case 400:
                  this.login_error =
                      "Deine Anmeldedaten waren leider falsch. Probiere es noch ein mal.";
                  break;
                default:
                  console.log("Critical error! Please contact the site administrator");
              }

              return false;
            }

            console.log(json);

            // store token in local storage or cookie
            // TODO refactor to service worker 
            localStorage.setItem("auth_token", json.token);
            localStorage.setItem("auth_email", json.record.email);
            localStorage.setItem("auth_username", json.record.username)
            localStorage.setItem("auth_id", json.record.id)
            this.$router.push({name: "index"});


          });
    },
  },
};
</script>

<style scoped>
.card {
}
</style>
