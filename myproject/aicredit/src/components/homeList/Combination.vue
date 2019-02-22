<template>
  <div class="move">
    <header-logo></header-logo>
    <slider-box v-if="data" :data="data.sliderImg"></slider-box>
    <theme-list v-if="data" :data="data"></theme-list>
    <footer-version></footer-version>
  </div>
</template>

<script>
  import HeaderLogo from "../public/HeaderLogo";
  import SliderBox  from "./SliderBox";
  import ThemeList  from "./ThemeList";
  import FooterVersion from "../public/FooterVersion";
    export default {
        name: "Combination",
      props:["data"],
      components:{
          HeaderLogo,
          SliderBox,
          ThemeList,
          FooterVersion
      }
    }
</script>

<style scoped>
  .move{
    flex:1;
    overflow-x:hidden;
    overflow-y:auto;
    width:100%;
  }
</style>
