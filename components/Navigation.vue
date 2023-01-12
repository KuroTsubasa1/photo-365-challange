<template>

  <div class="d-flex flex-column flex-lg-row bg-dark pt-3 pb-2 ">

    <div class="d-flex flex-column flex-lg-row justify-content-start">
      <NuxtLink class=" fake-h5 text-decoration-none btn btn-close-white" to="/">365 Photo Challange 📷</NuxtLink>
    </div>


    <div class="d-flex flex-fill flex-column flex-lg-row justify-content-md-start justify-content-center">
      <NuxtLink class="text-decoration-none btn btn-close-white" to="/prompt-of-the-day">Challange des Tages</NuxtLink>
      <NuxtLink class="text-decoration-none btn btn-close-white" to="/gallery">Galerie</NuxtLink>
      <NuxtLink class="text-decoration-none btn btn-close-white" to="/calendar">Kalender</NuxtLink>
      <NuxtLink class="text-decoration-none btn btn-close-white" to="/upload-image">Foto hochladen</NuxtLink>
      <NuxtLink v-show="!userAuth.isAuthenticated" class="text-decoration-none btn btn-close-white" to="/login">Login</NuxtLink>
    </div>


    <div class="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-end  align-content-centers">
      <NuxtLink v-show="userAuth.isAuthenticated" class="text-decoration-none  d-flex justify-content-center" to="/profile">
        <div class="profile ">
          
        </div>
      </NuxtLink>
      <div class="text-decoration-none btn btn-close-white"  to="/profile">Menu Button</div>
    </div>

  </div>

</template>

<script setup>
import {useUserAuthStore} from "~/stores/userAuth";
const userAuth = useUserAuthStore()

console.log(userAuth.isAuthenticated)

</script>

<style scoped>
.b {
  border: #ce2127 solid 1px;
}

.fake-h5 {
  font-size: 1.25rem !important;
  line-height: 1.3rem;
}

.profile
{
  margin-top: 7px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #ce2127;
}

.profile:hover
{
  background-color: #5e1113;
}



.nav-link {
  /*
  margin-left: 5px;
  margin-right: 5px;
  min-width: 75px;
  */
}
</style>