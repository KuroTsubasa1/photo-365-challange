<template>
  <div class="flex flex-row border-b-[1px] border-solid  p-4 m-1 text-xl ">
       <span class="basis-1/4 flex justify-start ">
         #{{ props.number }}
       </span>
    <div class="basis-1/2 flex justify-center">
      <strong>
        {{ props.prompt }}
      </strong>
    </div>
    <div class="basis-1/4 justify-end flex">
      {{ props.date }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  number: String,
  prompt: String,
  date: String
})
</script>

<style scoped>

</style>