0
<template>

  <div class="bo image-cell d-flex flex-column  text-dark">
    <h6>
      {{ image.name }}
    </h6>
    <div class="bo gallery-image" :style="image_path">

    </div>
    <div class="image-cell-tail d-flex flex-row">
      <div class="d-flex flex-column flex-wrap">
        <strong style="font-size: smaller" class="">
          #{{ prompt }}
        </strong>
        <div>
          Von: {{ username }}
        </div>
      </div>
      <div class="d-flex flex-column flex-fill">
        <div>

        </div>
      </div>
    </div>

  </div>


</template>

<script>
import {computed} from "#imports";
import {default as helper} from "../utils/userHelper"

export default {
  name: "GalleryImage",
  data() {
    return {
      api_url: 'https://pocket.lasseharm.space/api/files/',
      username: "Loading ...",
      prompt: "Loading ...",
    }
  },
  methods:
      {
        waitForData: async function () {
          const user = await helper.getUserById(this.image.user)
          const prompt = await helper.getPromptById(this.image.prompt)
          this.username = user.username
          this.prompt = prompt.prompt_text.toUpperCase()
        },
        insertBlankCharToImageName: function () {
          if (typeof this.image.name == "undefined" || this.image.name === "") {
            this.image.name = '\u00A0'
          }
        }
      },
  computed:
      {
        image_path() {
          return "background-image:url('" + this.api_url + this.image.collectionId + '/' + this.image.id + '/' + this.image.photo_file + "')"
        },
      },
  props: {
    image: Object
  },
  mounted() {
    this.waitForData()
    this.insertBlankCharToImageName()
  }
}

</script>

<style scoped>
.bo {
  border-radius: 5px;
  background-color: #FFF;
  padding: 20px;
  /* border: #212121 solid 2px; */

}

.image-cell {
  margin: 20px;
}

.image-cell-tail {
  margin-top: 10px;
  margin-bottom: 40px;
}

.gallery-image {
  /* border: #ce2127 solid 1px;*/
  width: 250px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*background-color: #33a8d1;*/
}
</style>