<template>
  <div class="inforBox">
    <header-logo></header-logo>
    <div class="combine">
      <header-nav v-if="data" :data="data.head"></header-nav>
      <Slider v-if="data" :data="data.slide"></Slider>
      <message-board v-if="data" :data="data.messageBoard"></message-board>
    </div>
    <p class="nextPage">下一页</p>
    <footer-version></footer-version>
  </div>

</template>

<script>
  import HeaderLogo from "../public/HeaderLogo";
  import HeaderNav from "./modules/HeaderNav";
  import Slider from "./modules/Slider";
  import MessageBoard from "./modules/MessageBoard";
  import FooterVersion from "../public/FooterVersion"
    export default {
        name: "Combine",
        components:{
          HeaderLogo,
          HeaderNav,
          Slider,
          MessageBoard,
          FooterVersion
        },
      props:["data"]
    }
</script>

<style scoped>
  .inforBox{
    width:100%;
    overflow-x: hidden;
    overflow-y:auto;
  }

.combine{
  background:#ffffff;
}
  .nextPage{
    margin:.13rem auto 0;
    width:.69rem;
    height:.35rem;
    background:#ffffff;
    font-size:.14rem;
    line-height:.35rem;
    text-align:center;
    color:#999999;
  }
</style>
