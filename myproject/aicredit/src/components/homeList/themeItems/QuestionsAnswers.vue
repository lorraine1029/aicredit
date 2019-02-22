<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>问答</h3></div>
      <div class="more"><a href="#"><span>更多</span></a></div>
    </div>
    <div class="questionAnswer">
      <ul>
        <li v-for="n in data.business">{{n}}</li>
      </ul>
      <div class="question">
        <a href="#" v-for="(i,index) in data.newsItem">
          <em>{{i.news}}</em>
          <span><span class="iconfont icon-yanjing"></span>
            <b>{{i.num}}</b>
          </span>
        </a>
        <a href="#"><p class="moreAnswer"><b>更多回答</b></p></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "QuestionsAnswers",
        props:["data"]
    }
</script>

<style scoped>

</style>
