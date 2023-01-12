<template>
  <div class="d-flex flex-column min-vh-100 min-vw-100 ">
    <Navigation></Navigation>
    <main class="d-flex flex-grow-1 justify-content-center align-items-center">
      
      <div>
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>


</script>

<style scoped></style>
