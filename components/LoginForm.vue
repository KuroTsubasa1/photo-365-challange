<template>

  <div class="card  text-white bg-dark " style="width: 30rem;">
    <div class="card-body">

      <section class="mb-4">
        <h4 class="card-title text-center">Login</h4>
      </section>

      <section class="">
        <div class="row mb-3">
          <label for="inputEmail" class="col-sm-4 col-form-label">Email</label>
          <div class="col-sm-8">
            <input v-model="username" type="email" class="form-control  text-white" id="inputEmail" required>
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
          <div class="col-sm-8">
            <input v-model="password" type="password" class="form-control  text-white" id="inputPassword"
                   required>
          </div>
        </div>

        <div class="row mt-1 mb-1 text-danger">
         <strong>
           <label for="none" class="col-sm-12 col-form-label">{{ login_error }}</label>
         </strong>
        </div>

        <div class="row mt-1">
          <div class="col-sm-12">
            <input v-on:click="tryLogin" type="button" class="form-control btn btn-dark" id="inputSend" value="Login">
          </div>
        </div>
      </section>

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
      login_error: " "
    }
  },
  methods:
      {
        debug: function () {
          console.log(this.username)
          console.log(this.password)
        },

        tryLogin: function () {

          this.login_error = " "

          let data =
              {
                identity: this.username,
                password: this.password
              }

          fetch(link, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
              .then(response => response.json())
              .then(json => {

                if (typeof (json.code) !== 'undefined') {
                  switch (json.code) {
                    case 400:
                      this.login_error = "Deine Anmeldedaten waren leider falsch. Probiere es noch ein mal."
                      break;
                    default:
                      console.log("Critical error! Please contact the site administrator")

                  }

                  return false

                }

                // store token in local storage or cookie

                localStorage.setItem("auth_token", json.token)

                this.$router.push({ name: 'index' })

                console.log(json)
              });


          console.log("TODO Login ...")
        }
      }

}
</script>

<style scoped>
.card
{

}
</style>

