<template>

  <div  :class="bannerClasses">
    <div class="grow min-w-90 flex justify-center align-middle ">

      <AddToHomeScreen>

      </AddToHomeScreen>

    </div>
    <div class=" min-w-10">
      <Icon @click="hideAlert()" class="me-2 hover:bg-gray-900 rounded" name="material-symbols:close" size="2em"/>
    </div>
  </div>

</template>

<script setup>

  const bannerClasses = ref("flex min-w-full py-3 bg-dark text-white columns-2 items-center sticky inset-x-0 bottom-0")

  function hideAlert()
  {
    bannerClasses.value += " d-none"
  }

</script>

<style scoped>

</style>