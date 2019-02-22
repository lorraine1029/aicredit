<template>
    <div class="bigBox">
      <head-logo></head-logo>
      <header-nav v-if="data" :data="data.headerNav"></header-nav>
      <band-list v-if="data" :data="data.bandList"></band-list>
      <loans-strategy v-if="data" :data="data.loansStrategy"></loans-strategy>
      <loans-board v-if="data" :data="data.loansBoard"></loans-board>
      <loans-question-answer v-if="data" :data="data.loansQuestionAnswer"></loans-question-answer>
      <footer-version></footer-version>
    </div>
</template>

<script>
  import HeadLogo from "./list/HeadLogo";
  import HeaderNav from "./list/HeaderNav";
  import BandList from "./list/BandList";
  import LoansStrategy from "./list/LoansStrategy";
  import LoansBoard from "./list/LoansBoard";
  import LoansQuestionAnswer from "./list/LoansQuestionAnswer";
  import FooterVersion from "../public/FooterVersion";
    export default {
        name: "SubPage",
        components:{
          HeadLogo,
          HeaderNav,
          BandList,
          LoansStrategy,
          LoansBoard,
          LoansQuestionAnswer,
          FooterVersion
        },
      props:["data"]
    }
</script>

<style scoped>
.bigBox{
  flex:1;
  overflow-x:hidden;
  overflow-y:auto;
  width:100%;
}
</style>
