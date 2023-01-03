0<template>

  <div class="gallery-image" :style="image_path">

  </div>

</template>

<script>
export default {
  name: "GalleryImage",
  data() {
    return {
      image_path: "",
    }
  },
  props: {
    prop_image_path: String,
  },
  methods:{
    compute_image_path: function ()
    {
     this.image_path =  "background-image:url('" + this.prop_image_path + "')"
    }
  },
  created() {
    this.compute_image_path()
    console.log(this.prop_image_path)
    console.log(this.image_path)
  }
}

</script>

<style scoped>
.gallery-image {
  padding: 15px;
  margin: 20px;
  /* border: #ce2127 solid 1px;*/
  width: 320px;
  height:  180px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*background-color: #33a8d1;*/
}
</style>