<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>卡问答</h3></div>
      <div class="more"><a href="#"><span>更多</span></a></div>
    </div>
    <div class="questionAnswer">
      <ul>
        <li v-for="n in data.cardQuestion.business">{{n}}</li>
      </ul>
      <div class="question">
        <a href="#" v-for="(i,n) in data.cardQuestion.newsItem.news"><em>{{i}}</em><span><span class="iconfont icon-yanjing"></span> <b>&nbsp;{{data.cardQuestion.newsItem.num[n]}}</b></span></a>
        <a href="#"><p class="moreAnswer"><b>更多卡问答</b></p></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardQuestionAnswer",
    props:["data"]
  }
</script>

<style scoped>

</style>
