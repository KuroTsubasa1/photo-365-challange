<template>

  <gallery-image
      v-for="(image,index) in images"
      :image="image">
  </gallery-image>

</template>

<script>

// https://pocket.lasseharm.space/api/files/1zgd4x1vh2rswl7/o86g87mo4jljc26/burg_u9piFiSrGl.png
definePageMeta(
    {
      layout: 'gallery-layout',
    }
);

export default {
  data() {
    return {
      api_url: 'https://pocket.lasseharm.space/api/files/',
      images: [],
    }
  },
  created() {
    this.getImages();
  },
  methods:
      {
        getImages: function () {

          let link = `https://pocket.lasseharm.space/api/collections/photos/records`;

          fetch(link)
              .then(response => response.json())
              .then(json => {
                    console.log(json);
                    this.images = json.items
                  }
              )

        }
      }
}


</script>

<style scoped>

</style>