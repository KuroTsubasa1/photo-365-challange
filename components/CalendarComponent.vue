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
import {ref} from "vue";
import {default as helper} from "../utils/userHelper";
import CalendarCellComponent from "~/components/CalendarCellComponent.vue";

const week = ref([])

async function waitForData() {
  let weekdays = helper.getCurrentCalendarWeek();

  week.value = weekdays

  for (const i in weekdays) {
    const promptData = await helper.getPromptOfTheDay(weekdays[i].date)
    week.value[i].prompt = promptData.prompt
  }
}

onMounted(() => {
  waitForData();

  let curr = new Date(); // get current date
  let first = curr.getDate() - curr.getDay() + 1;
  console.log(curr.getDate())
  console.log(curr.getDay())
  console.log(curr.getDay() + 1)
  console.log(first)
  console.log(curr.getDate() - curr.getDay())

});
</script>

<style scoped>
.bar {
  min-width: 50vw;

  min-height: 50px;
  /* border: 1px brown solid; */
}
</style>
