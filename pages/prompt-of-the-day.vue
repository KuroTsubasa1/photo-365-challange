<template>
  <PromptOfTheDay>
  </PromptOfTheDay>

  <div
      class="container d-flex flex-column flex-lg-row flex-fill text-center w-100 b justify-content-center justify-content-evenly mt-5">
    <a @click="toggleIdeas" class="btn btn-dark" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false">
      Gib mir ein paar Ideen
    </a>
  </div>

  <div
      v-show="showIdeas" class="container idea-container flex-column flex-lg-row flex-fill text-center w-100 b justify-content-center justify-content-evenly mt-5">
    <div class="b d-flex flex-column ">
      <div>
        Title
      </div>
      <div>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
    </div>

    <div class="b d-flex flex-column ">
      <div>
        Title
      </div>
      <div>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
    </div>

    <div class="b d-flex flex-column ">
      <div>
        Title
      </div>
      <div>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref} from "vue";

const showIdeas = ref(false)
function toggleIdeas() {

  showIdeas.value = !showIdeas.value;
  
}

</script>

<style scoped>
.b {
  padding-left: 20px;
  padding-right: 20px;
}

.idea-container
{
  display: flex;
}
</style>