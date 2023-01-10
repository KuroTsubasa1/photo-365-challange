<template>
  <div>
    <h2 class="text-center">Das Thema des Tages lautet :</h2>
    <h1 class="prompt-of-the-day text-center">
      <strong>
        {{ prompt.prompt }}
      </strong>
    </h1>
  </div>

  <div
      class="container d-flex flex-column flex-lg-row flex-fill text-center w-100 justify-content-center mt-5">
    <a @click="toggleIdeas" class="btn btn-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false">
      Gib mir ein paar Ideen
    </a>
  </div>

  <div
      v-show="showIdeas" class="container idea-container flex-column flex-lg-row flex-fill text-center w-100 b justify-content-evenly mt-5">
    
    <div v-for="item in prompt.helpers" class="b d-flex flex-column mb-3">
      <div class=" ">
        <h5>
          {{ item.title }}
        </h5>
      </div>
      <div>
        {{ item.description }}
      </div>
    </div>
    
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
      showIdeas: false,
    };
  },
  mounted() {

    this.waitForData()
  },
  methods: {
    
    toggleIdeas: function ()
    {
      this.showIdeas = !this.showIdeas;
    },
    
    waitForData: async function()
    {
      const promptData = await helper.getPromptOfTheDay()
      this.prompt = promptData
    },
  },
};
</script>

<style>
.prompt-of-the-day {
  text-align: center;
}

.b {
  /* border: #ce2127 solid 1px; */
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

.idea-container
{
  display: flex;
}
</style>