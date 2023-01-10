<template>
  <PromptOfTheDay>
  </PromptOfTheDay>
</template>

<script setup>
import {ref} from "vue";

const showIdeas = ref(false)
function toggleIdeas() {

  showIdeas.value = !showIdeas.value;
  
}

</script>

<style scoped>
.b {
  padding-left: 20px;
  padding-right: 20px;
}

.idea-container
{
  display: flex;
}
</style>