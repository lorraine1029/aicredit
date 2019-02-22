<template>
  <div>
    <credit-collection :data="data.card"></credit-collection>
    <loans-recommend :data="data.loans"></loans-recommend>
    <thematic-activitie :data="data.theme"></thematic-activitie>
    <questions-answers :data="data.questionAnswer"></questions-answers>
    <strategy :data="data.strategy"></strategy>
    <community :data="data.community"></community>
  </div>
</template>

<script>
  import CreditCollection from "./themeItems/CreditCollection";
  import LoansRecommend from "./themeItems/LoansRecommend";
  import ThematicActivitie from "./themeItems/ThematicActivitie";
  import QuestionsAnswers from "./themeItems/QuestionsAnswers";
  import Strategy from "./themeItems/Strategy";
  import Community from "./themeItems/Community"
    export default {
        name: "ThemeList",
        components:{
          CreditCollection,
          LoansRecommend,
          ThematicActivitie,
          QuestionsAnswers,
          Strategy,
          Community
        },
      props:["data"]
    }
</script>

<style scoped>

</style>
