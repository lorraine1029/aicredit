<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>贷款问答</h3></div>
      <div class="more"><a href="#"><span>更多</span></a></div>
    </div>
    <div class="questionAnswer">
      <ul>
        <li v-for="n in data.business">{{n}}</li>
      </ul>
      <div class="question">
        <a href="#" v-for="(i,n) in data.newsItem.news"><em>{{i}}</em><span><span class="iconfont icon-yanjing"></span> <b>&nbsp;{{data.newsItem.num[n]}}</b></span></a>
        <a href="#"><p class="moreAnswer"><b>更多贷款回答</b></p></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoansQuestionAnswer",
    props:["data"]
  }
</script>

<style scoped>

</style>
