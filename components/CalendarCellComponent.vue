<template>
  <div
    class="c-cell flex-column d-flex flex-wrap justify-content-center align-content-center"
  >
    <div
      class="foo d-flex flex-wrap justify-content-start align-content-center ms-3 mt-1"
    >
      {{ props.weekday }}
    </div>

    <div
      class="text-lg foo d-flex flex-wrap flex-grow-1 justify-content-center align-content-center text-center"
    >
      {{ props.date }}
    </div>
    <div
      class="foo flex-grow-1 d-flex flex-wrap flex-grow-1 justify-content-center align-content-center text-center"
    >
      {{ prompt }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { default as helper } from "../utils/userHelper";

const props = defineProps(["weekday", "date", "prompt"]);

const prompt = computed(() => {
  return filterData();
});

function filterData() {
  const currDate = helper.getCurrentDate();

  let value = props.prompt;
  if (Date.parse(currDate) < Date.parse(props.date)) {
    value = "???";
  }

  return value;
}
</script>

<style scoped>
.c-cell {
  width: 200px;
  height: 200px;
  border: 1px #d7d7d7 solid;
}

.text-lg {
  font-size: 2rem;
}

.foo {
  min-width: 100%;

  /*border: 1px rgb(255, 238, 0) solid;*/
}
</style>

/* Add props for - Weekday - Date - Prompt */
