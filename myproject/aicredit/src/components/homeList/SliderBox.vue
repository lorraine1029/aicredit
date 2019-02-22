<template>
  <div class="swiperBox">
    <div class="slider swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="i in data"><img :src="i" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
    import {slider} from "../../assets/js/index.js";
    export default {
        name: "SliderBox",
        props:["data"],
        mounted() {
          slider()
        }
    }
</script>

<style scoped>

</style>
