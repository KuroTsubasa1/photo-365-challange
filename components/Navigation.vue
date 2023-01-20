<template>

  <div class="d-flex flex-column flex-lg-row bg-dark pt-3 pb-2 ">

    <div class="d-flex flex-row justify-content-lg-start justify-content-center">
      <NuxtLink class="fake-h5 text-decoration-none btn btn-close-white  flex-fill" to="/">365 Photo Challange
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
          Challange des Tages
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
          <div v-show="userAuth.isAuthenticated" class="profile ">
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

const userAuth = useUserAuthStore()
const breakpoints = useBreakpoints(breakpointsBootstrapV5)

const smallerEqualThanLg = breakpoints.isSmallerOrEqual('lg')
const smallerThanLg = breakpoints.smaller('lg')

const userProfileLink = `/profile/${userAuth.id}`

const menuCollapsed = ref(false)

onMounted(() => {
  console.log(1)
      if (smallerEqualThanLg) {
        menuCollapsed.value = true
      } else {
        menuCollapsed.value = false
      }
  console.log(menuCollapsed.value)
    }

)

function collapseMenu() {
  menuCollapsed.value = !menuCollapsed.value
}

watch(smallerThanLg, (smallerThanLg) => {
  console.log(2)
  if (smallerThanLg) {
    menuCollapsed.value = true
  } else {
    menuCollapsed.value = false
  }
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
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #ce2127;
}

.profile:hover {
  background-color: #5e1113;
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