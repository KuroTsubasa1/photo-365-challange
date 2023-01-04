<template>
  <div
    class="bar d-flex flex-column mt-5 mt-0-xl flex-xl-row justify-content-center align-content-center flex-wrap"
  >
  </div>
  
</template>

<script setup>
import { ref } from "vue";
import { default as helper} from '../utils/userHelper'


async function waitForData()
{
    
    console.log(helper.getCurrentCalendarWeek());
    for (const i in helper.getCurrentCalendarWeek()) {
        console.log(await helper.getPromptOfTheDay(i.date));
    }
}

onMounted(() => {
    waitForData()
   
});
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
