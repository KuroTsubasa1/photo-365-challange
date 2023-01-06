<template>
  <header>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" aria-current="page" to="/">365 Photo Challange 📷</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <!-- <NuxtLink class="nav-link" to="/calendar">Kalender</NuxtLink> -->
            <NuxtLink class="nav-link " to="/prompt-of-the-day">Challange des Tages</NuxtLink>

            <NuxtLink class="nav-link " to="/gallery">Galerie</NuxtLink>
            <NuxtLink class="nav-link " to="/calendar">Kalender</NuxtLink>
            <!-- <a class="nav-link" href="#">Fotos des Tages</a> -->


            <NuxtLink class="nav-link " to="/upload-image">
              Foto hochladen
            </NuxtLink>

            <NuxtLink class="nav-link  float-end" to="/login">Login</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import AlertComponent from "~/components/AlertComponent.vue";

export default {
  name: "Navigation",
  components: {AlertComponent}
}
</script>

<style scoped>
.nav-link {
  /*
  margin-left: 5px;
  margin-right: 5px;
  min-width: 75px;
  */
}
</style>