<template>
    <div class="thirdHeader">
      <header-logo></header-logo>
      <talent-recommendation v-if="data" :data="data"></talent-recommendation>
      <hot-bank v-if="data" :data="data"></hot-bank>
      <theme-selected v-if="data" :data="data"></theme-selected>
      <calories-recommended v-if="data" :data="data"></calories-recommended>
      <card-question-answer v-if="data" :data="data"></card-question-answer>
      <card-strategy v-if="data" :data="data"></card-strategy>
      <card-board v-if="data" :data="data"></card-board>
      <footer-version></footer-version>
    </div>
</template>

<script>
  import HeaderLogo from "../public/HeaderLogo";
  import TalentRecommendation from "./items/TalentRecommendation";
  import HotBank from "./items/HotBank";
  import ThemeSelected from "./items/ThemeSelected";
  import CaloriesRecommended from "./items/CaloriesRecommended";
  import CardQuestionAnswer from "./items/CardQuestionAnswer";
  import CardStrategy from "./items/CardStrategy";
  import CardBoard from "./items/CardBoard";
  import FooterVersion from "../public/FooterVersion"
    export default {
        name: "Slipper",
      components:{
          HeaderLogo,
          TalentRecommendation,
          HotBank,
          ThemeSelected,
          CaloriesRecommended,
          CardQuestionAnswer,
          CardStrategy,
          CardBoard,
          FooterVersion
      },
      props:["data"]
    }
</script>

<style scoped>
  .thirdHeader{
    width:100%;
    overflow-x:hidden;
    overflow-y:auto;
  }
</style>
