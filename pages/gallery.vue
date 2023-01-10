<template>

  <main class="d-flex flex-grow-1">
    <section class="d-flex flex-wrap justify-content-center mt-5 ms-md-5">

      <gallery-image
          v-for="(image,index) in images"
          :image="image">
      </gallery-image>
    </section>
  </main>



</template>

<script>

// https://pocket.lasseharm.space/api/files/1zgd4x1vh2rswl7/o86g87mo4jljc26/burg_u9piFiSrGl.png
definePageMeta(
    {
      
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