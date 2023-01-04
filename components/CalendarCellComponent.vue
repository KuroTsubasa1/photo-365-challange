<template>
  <div
    class="c-cell flex-column d-flex flex-wrap justify-content-center align-content-center"
  >
    <div class="foo d-flex flex-wrap justify-content-start align-content-center">{{ props.weekday }}</div>

    <div
      class="text-lg foo d-flex flex-wrap flex-grow-1 justify-content-center align-content-center"
    >
    {{ props.date }}
    </div>
    <div
      class="foo flex-grow-1 d-flex flex-wrap flex-grow-1 justify-content-center align-content-center"
    >
    {{ props.prompt }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(['weekday', 'date', 'prompt'])


</script>

<style scoped>
.bar {
  min-width: 50vw;

  min-height: 50px;
  border: 1px brown solid;
}

.c-cell {
  width: 150px;
  height: 150px;
  border: 1px green solid;
}

.text-lg {
  font-size: 2rem;
}

.foo {
  min-width: 100%;
  /*border: 1px rgb(255, 238, 0) solid;*/
}
</style>


/*

Add props for
- Weekday
- Date
- Prompt

*/
