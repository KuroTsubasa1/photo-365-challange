<template>
  <div
    class="container bg-dark d-flex flex-column mt-5 mt-0-xl justify-content-center align-content-center flex-wrap flex-xl-nowrap p-5"
  >
    <h1>Foto hochladen</h1>

    <div class="flex-row mb-3">
      <span> Name des Foto's </span>
      <input
        v-model="photo_name"
        class="form-control text-white"
        type="text"
        name=""
        id=""
      />
    </div>

    <div class="flex-row mb-3">
      <span> Challange des Tages </span>
      <select class="form-select" aria-label="Default select example">
        <option v-for="(prompt, index) in prompts" :selected="prompt.selected">
          {{ prompt.prompt }}
        </option>
      </select>
    </div>

    <div class="flex-row mb-3">
      <span>Wähle ein Foto </span>
      <input
        ref="photo_file"
        v-on:change="handleFileUpload()"
        class="form-control text-white"
        type="file"
        id="formFile"
      />
    </div>

    <div class="flex-row mb-3">
      <input
        v-on:click="tryUpload"
        type="button"
        class="form-control btn btn-dark"
        id="inputSend"
        value="Hochladen"
      />
    </div>
  </div>
</template>

<script setup>
import { pipelineBareFunction } from "@babel/types";
import { ref } from "vue";
import { default as helper } from "../utils/userHelper";

const photo_name = ref("");
const photo_file = ref(null);
const prompts = ref("");

function filterData(data, date) {
  const currDate = helper.getCurrentDate();
  let value = data;
  if (Date.parse(currDate) < Date.parse(date)) {
    value = "???";
  }
  return value;
}

async function waitForData() {
  const week = helper.getCurrentCalendarWeek();
  const currDate = helper.getCurrentDate();

  let tmpArr = [];

  for (const i in week) {
    let tmpPrompt = filterData(
      await helper.getPromptOfTheDay(week[i].date),
      week[i].date
    );

    if (tmpPrompt != "???" && tmpPrompt != "There is no prompt of the day 😭") {
      tmpArr.push({
        prompt: tmpPrompt,
        date: week[i].date,
        selected: currDate == week[i].date ? true : false,
      });
    }
  }

  prompts.value = tmpArr;
}

async function handleFileUpload() {
  console.log("selected file", photo_file.value.files);
}

function tryUpload() {
  const data = {
    name: photo_name,
    photo_file: photo_file,
    user: "",
    public: true,
    prompt: "",
  };

  const response = fetch(helper.baseUrl + "/api/collections/photos/records", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data),
  });
}

onMounted(() => {
  waitForData();
});
</script>

<style scoped></style>
