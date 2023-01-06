<template>
  <div>
    <h2 class="text-center">Das Thema des Tages lautet :</h2>
    <h1 class="prompt-of-the-day text-center">
      <strong>
        {{ prompt }}
      </strong>
    </h1>
  </div>
</template>

<script>
import { default as helper } from "../utils/userHelper";
export default {
  data() {
    return {
      prompt: "Loading ...",
      titleClass: "title foo",
      baseUrl: "https://pocket.lasseharm.space",
      verifyUserUrl: "/api/collections/users/confirm-verification",
      promptUrl: "/api/collections/prompts/records",
    };
  },
  mounted() {

    this.waitForData()
  },
  methods: {

    waitForData: async function()
    {
      const promptData = await helper.getPromptOfTheDay()
      this.prompt = promptData.prompt
    },
  },
};
</script>

<style>
.prompt-of-the-day {
  text-align: center;
}
</style>
