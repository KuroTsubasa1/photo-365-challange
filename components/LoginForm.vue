<template>
  <div
      class="container bg-dark d-flex flex-column mt-5 mt-0-xl justify-content-center align-content-center flex-wrap flex-xl-nowrap p-5"
  >
    <h1>Login</h1>

    <div class="flex-row mb-3">
      <span> Email </span>
      <input
          v-model="username"
          v-on:keyup.enter="sendLogin"
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
          v-on:keyup.enter="sendLogin"
          class="form-control text-white"
          type="password"
          name=""
          id=""
      />
    </div>

    <div class="flex-row mb-3 text-danger">
      <label for="none" class="col-sm-12 col-form-label">{{ loginError }}</label>
    </div>

    <div class="flex-row mb-3">
      <input
          v-on:click="sendLogin"
          v-on:submit="sendLogin"
          type="button"
          class="form-control btn btn-dark"
          id="inputSend"
          value="Login"
      />
    </div>
  </div>
</template>

<script setup>
import { useUserAuthStore } from '@/stores/userAuth'
const userAuth = useUserAuthStore()
userAuth.$reset()
const router = useRouter()

const username = ref("")
const password = ref("")
const loginError = ref("")

const loginAuthLink = ref("https://pocket.lasseharm.space/api/collections/users/auth-with-password")
const defaultLoginErrorMsg = ref("Deine Anmeldedaten waren leider falsch. Probiere es noch ein mal.")

async function tryLogin() {
  loginError.value = " "

  let data =
      {
        identity: username.value,
        password: password.value,
      }

  const response = await fetch(loginAuthLink.value,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })

  // check for error
  if (typeof response.code !== 'undefined') {
    loginError.value = defaultLoginErrorMsg.value
    return false
  }

  const json = await response.json()

  if (typeof json.code !== 'undefined') {
    loginError.value = defaultLoginErrorMsg.value
    return false
  }

  
  /*
  // add auth data to store 
  userAuth.$patch(
      {
        userAuthToken: json.token,
        userId: json.record.id,
        userName: json.record.username,
        userEmail: json.record.email
      }
  )
  */
  
  localStorage.setItem("auth_token", json.token)
  
  userAuth.$patch(
      {
        firstRequest: false,
        token: json.token,
        isAuthenticated: true,
        id: json.record.id,
        email : json.record.email,
        username: json.record.username,
        collection: json.record.collectionId,
        avatar: json.record.avatar
      }
  )
  
  return true
  
}

async function sendLogin()
{
  if (await tryLogin())
  {
    router.push({name: 'index'})
  }
}

</script>

<style scoped>
.card {
}
</style>
