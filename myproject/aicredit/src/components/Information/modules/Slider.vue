<template>
  <div class="swiperBox">
    <div class="slider swiper-container">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(n,h) in data.imgs">
          <img :src="data.address+n" alt="">
          <p class="words">{{data.words[h]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {slider} from "../../../assets/js/index.js";
  export default {
    name: "Slide",
    props:["data"],
    mounted() {
      slider()
    }
  }
</script>

<style scoped>
  .swiper-slide{
    position:relative;
  }
  .words{
    position:absolute;
    left:.15rem;
    bottom:.08rem;
    font-size:.16rem;
    color:#fff;
    width:80%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
</style>
