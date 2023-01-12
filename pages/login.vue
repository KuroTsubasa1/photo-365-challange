<template>

  <LoginForm>

  </LoginForm>

</template>

<script setup>
import {useUserAuthStore} from '@/stores/userAuth'

definePageMeta({
  middleware: []
  // or middleware: 'auth'
})

</script>

<style scoped>

</style>