<template>
  <div class="contentBox">
    <header-logo></header-logo>
    <plate></plate>
    <Slide v-if="data" :data="data"></Slide>
    <discussion-board v-if="data" :data="data"></discussion-board>
    <loans-recommend v-if="data" :data="data"></loans-recommend>
    <footer-version></footer-version>
  </div>
</template>

<script>
  import HeaderLogo from "../public/HeaderLogo";
  import Plate from "./list/Plate";
  import Slide from "./list/Slide";
  import DiscussionBoard from "./list/DiscussionBoard";
  import LoansRecommend from "./list/LoansRecommend";
  import FooterVersion from "../public/FooterVersion";

    export default {
        name: "Content",
      components:{
        HeaderLogo,
        Plate,
        Slide,
        DiscussionBoard,
        LoansRecommend,
        FooterVersion
      },
      props:["data"]
    }
</script>

<style scoped>
  .contentBox{
    width:100%;
    flex:1;
    overflow-x:hidden;
    overflow-y:auto;
  }
</style>
