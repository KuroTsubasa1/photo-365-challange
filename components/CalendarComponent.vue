<template>
  
  <div>
    <h2 class="container d-flex flex-column mt-5 mt-0-xl flex-xl-row justify-content-center align-content-center flex-wrap flex-xl-nowrap">
    Kalender der Woche
  </h2>
  </div>
  
  <div
    class="bar container d-flex flex-column mt-5 mt-0-xl flex-xl-row justify-content-center align-content-center flex-wrap flex-xl-nowrap"
  >
  <CalendarCellComponent v-for="day in week" :weekday="day.weekday" :date="day.date" :prompt="day.prompt">
  </CalendarCellComponent>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { default as helper } from "../utils/userHelper";

const week = ref([])

async function waitForData() {
  let weekdays = helper.getCurrentCalendarWeek();

  week.value = weekdays

  for (const i in weekdays) {
    week.value[i].prompt = await helper.getPromptOfTheDay(weekdays[i].date)
  }
}

onMounted(() => {
  waitForData();
});
</script>

<style scoped>
.bar {
  min-width: 50vw;

  min-height: 50px;
  /* border: 1px brown solid; */
}
</style>
