<template>
  <Navigation></Navigation>
  <main class="d-flex flex-grow-1">
    <section class="d-flex flex-wrap justify-content-center mt-5 ms-md-5">
      <slot>

      </slot>
    </section>
  </main>

</template>

<script>
export default {
  name: "gallery-layout"
}
</script>

<style scoped>

</style>