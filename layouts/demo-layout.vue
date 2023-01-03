<template>

  <div class="d-flex flex-column min-vh-100 min-vw-100">

    <header>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div class="container-fluid">
          <NuxtLink class="navbar-brand" aria-current="page" to="/">365 Photo Challange</NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
              <NuxtLink class="nav-link" to="/calendar">Kalender</NuxtLink>
              <NuxtLink class="nav-link" to="/prompt-of-the-day">Thema des Tages</NuxtLink>

              <a class="nav-link" href="#">Alle Fotos</a>
              <a class="nav-link" href="#">Fotos des Tages</a>
              <a class="nav-link" href="#">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </header>

  </div>


</template>

<script>
export default {
  name: "demo-layout"
}
</script>

<style scoped>

</style>