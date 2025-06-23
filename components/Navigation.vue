<template>

  <div class="d-flex flex-column flex-lg-row bg-dark pt-3 pb-2 ">

    <div class="d-flex flex-row justify-content-lg-start justify-content-center">
      <NuxtLink class="fake-h5 text-decoration-none btn btn-close-white  flex-fill" to="/">365 Photo Challenge
        <Icon name="ic:round-photo-camera" size="1.5em"/>
      </NuxtLink>

      <div @click="collapseMenu()" v-show="smallerThanLg"
           class="absolute top-3.5 right-0 btn btn-close-white active:border-none     ">
        <Icon class="me-2" name="material-symbols:menu" size="2em"/>
      </div>
    </div>

    <div v-show="!menuCollapsed" class="flex flex-column flex-lg-row flex-fill">
      <div class="d-flex flex-fill flex-column flex-lg-row justify-content-md-start justify-content-center">
        <NuxtLink class="text-decoration-none btn btn-close-white nav-link-lh" to="/prompt-of-the-day">
          <Icon class="me-2" name="material-symbols:swords" size="1.25em"/>
          Challenge des Tages
        </NuxtLink>
        <NuxtLink v-show="userAuth.isAuthenticated" class="text-decoration-none btn btn-close-white" to="/gallery">
          <Icon class="me-2" name="material-symbols:image-search" size="1.25em"/>
          Galerie
        </NuxtLink>
        <NuxtLink v-show="userAuth.isAuthenticated" class="text-decoration-none btn btn-close-white" to="/calendar">
          <Icon class="me-2" name="material-symbols:calendar-month" size="1.25em"/>
          Kalender
        </NuxtLink>
        <NuxtLink v-show="userAuth.isAuthenticated" class="text-decoration-none btn btn-close-white" to="/upload-image">
          <Icon class="me-2" name="material-symbols:upload-file" size="1.25em"/>
          Foto hochladen
        </NuxtLink>
      </div>


      <div class="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-end  align-content-center">
        <NuxtLink v-show="userAuth.isAuthenticated" class="text-decoration-none d-flex justify-content-center"
                  :to="{ path: userProfileLink }">
          <div v-show="userAuth.isAuthenticated" class="profile me-sm-0 me-lg-3" :style="userProfileAvatar">
          </div>
        </NuxtLink>
        <NuxtLink v-show="!userAuth.isAuthenticated" class="text-decoration-none btn btn-close-white" to="/login">
          <Icon class="me-2" name="material-symbols:login" size="1.25em"/>
          Login
        </NuxtLink>
      </div>

    </div>

  </div>

</template>

<script setup>
import {useUserAuthStore} from "~/stores/userAuth";
import {breakpointsBootstrapV5, useBreakpoints} from '@vueuse/core'
import {default as helper} from '../utils/userHelper'

const userAuth = await useUserAuthStore()
const breakpoints = useBreakpoints(breakpointsBootstrapV5)

const smallerEqualThanLg = breakpoints.isSmallerOrEqual('lg')
const smallerThanLg = breakpoints.smaller('lg')

const userProfileLink = ref(`/profile/${userAuth.id}`)
const userProfileAvatar = ref("background-image:url('" + helper.baseUrl + helper.apiUrl + userAuth.collection + '/' + userAuth.id + '/' + userAuth.avatar + "')")
const menuCollapsed = ref(false)

userAuth.$subscribe(() => {
  userProfileLink.value = `/profile/${userAuth.id}`
  userProfileAvatar.value = "background-image:url('" + helper.baseUrl + helper.apiUrl + userAuth.collection + '/' + userAuth.id + '/' + userAuth.avatar + "')"
}, {detached: true})


onMounted(() => {
      menuCollapsed.value = smallerEqualThanLg;
    }
)

function collapseMenu() {
  menuCollapsed.value = !menuCollapsed.value
}

watch(smallerThanLg, (smallerThanLg) => {
  menuCollapsed.value = !!smallerThanLg;
})


</script>

<style scoped>
.b {
  border: #ce2127 solid 1px;
}

.fake-h5 {
  font-size: 1.25rem !important;
  line-height: 1.3rem;
}

.profile {
  margin-top: 7px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.profile:hover {
  filter: brightness(80%);
}


.flex-lh {
  display: flex;
}

.nav-link {
  /*
  margin-left: 5px;
  margin-right: 5px;
  min-width: 75px;
  */
}
</style>