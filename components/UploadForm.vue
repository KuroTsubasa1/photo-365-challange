<template>
  <div
      class="container bg-dark d-flex flex-column mt-5 mt-0-xl justify-content-center align-content-center flex-wrap flex-xl-nowrap p-5">
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
      <span> Challenge des Tages </span>
      <select class="form-select" aria-label="Default select example">
        <option v-for="(prompt, index) in prompts" :selected="prompt.selected" :id="prompt.id" @change="updatePromptId">
          {{ prompt.prompt }}
        </option>
      </select>
    </div>

    <div class="flex-row mb-3">
      <span>Wähle ein Foto</span>
      <input
          ref="photo_file"
          class="form-control text-white"
          type="file"
          id="formFile"
      />
    </div>

    <div v-show="alert_show" :class="alert_style">
      <span class="">{{alert_msg}}</span>
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
import {ref} from "vue";
import {default as helper} from "../utils/userHelper";

const photo_name = ref("");
const photo_file = ref(null);
const prompts = ref("");
const prompt_id = ref("")
const alert_style = ref("flex-row mb-3")
const alert_show = ref(false)
const alert_msg = ref("")

function updatePromptId() {
  prompt_id.value = this.prompt.id
}

function filterData(data, date) {
  const currDate = helper.getCurrentDate();
  let value = data.prompt;
  
  if (Date.parse(helper.dateToIso8601Format(currDate)) < Date.parse(helper.dateToIso8601Format(date))) {
    value = "???";
  }
  data.prompt = value
  return data;
}

async function waitForData() {
  const week = helper.getCurrentCalendarWeek();
  const currDate = helper.getCurrentDate();

  let tmpArr = [];

  for (const i in week) {
    let tmpPrompt = filterData(
        (await helper.getPromptOfTheDay(week[i].date)),
        week[i].date
    );

    if (tmpPrompt.prompt !== "???" && tmpPrompt.prompt !== "There is no prompt of the day 😭") {

      // add default id for upload
      if (currDate === week[i].date) {
        prompt_id.value = tmpPrompt.id
      }

      tmpArr.push({
        prompt: tmpPrompt.prompt,
        date: week[i].date,
        selected: currDate === week[i].date,
        id: tmpPrompt.id,
      });
    }
  }
  prompts.value = tmpArr;
}


async function tryUpload() {
  
  let formdata = new FormData()
  formdata.append("name",photo_name.value)
  formdata.append("photo_file",photo_file.value.files[0])
  formdata.append("user",localStorage.getItem("auth_id"))
  formdata.append("public",true)
  formdata.append("prompt",prompt_id.value)
  
  const response = await fetch(helper.baseUrl + "/api/collections/photos/records", {
    method: "POST",
    headers:
        {
          Authorization: "Bearer "+ localStorage.getItem("auth_token")
        },
    body: formdata
  });

  const json = await response.json()
  
  if (typeof json.code !== 'undefined')
  {
    alert_style.value += " text-danger"
    alert_msg.value = json.message
    alert_show.value = true
  }
  else
  {
    alert_style.value += " text-success"
    alert_msg.value = "Dein Foto würde erfolgreich hochgeladen."
    alert_show.value = true

  }
  
}

onMounted(() => {
  waitForData();
});
</script>

<style scoped></style>
