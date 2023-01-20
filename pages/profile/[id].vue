<template>
  
  <div class="outer-container flex-column flex-xl-row d-flex justify-content-center">

    <div class="b d-flex inner-container flex-column  justify-content-center order-xl-0 order-1  bg-dark d-none">
      <div class="b d-flex justify-content-center">
        Options
      </div>
      <div class="b d-flex justify-content-center">
        Options
      </div>
      <div class="b d-flex justify-content-center">
        Options
      </div>
    </div>

    <div class="b inner-container d-flex flex-column  justify-content-center order-0 order-xl-1  bg-dark">
      <div class="b d-flex justify-content-center">
        Profile
      </div>
      <div class="b d-flex justify-content-center" >
        <div class="avatar b" :style="style_attr">
          
        </div>
      </div>
      <div class="b d-flex justify-content-center">
        Benutzername: {{ userAuth.username }}
      </div>
      <div class="b d-flex justify-content-center">
      <!--  Name: {{ userAuth.name }} -->
      </div>

      <div class="b d-flex justify-content-center">
     <button @click="helper.logoutUser()" class="w-100 btn btn-dark">
        Ausloggen
     </button>
      </div>
    </div>

    

  </div>

</template>

<script setup>
import {ref} from "vue";
import {default as helper} from "../../utils/userHelper"
import { useUserAuthStore } from '@/stores/userAuth'
const userAuth = await useUserAuthStore()
const user = ref("")

const style_attr =  "background-image:url('" + helper.baseUrl + helper.apiUrl + userAuth.collection + '/' + userAuth.id + '/' + userAuth.avatar + "')"
</script>

<style scoped>
.b {
  padding: 10px;
  margin: 20px;
  /* border: #ce2127 solid 1px; */
}

.avatar {
  /* background-image: url(); */
  width: 100px;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;

}

.outer-container
{
  min-width: 75vw;
}

.inner-container
{
  min-width: 40%;
}
</style>