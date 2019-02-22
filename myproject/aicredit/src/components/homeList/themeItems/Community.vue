<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>社区</h3></div>
      <div class="more"><a href="#"><span>更多</span></a></div>
    </div>
    <div class="community">
      <ul>
        <li v-for="j in data.labels">{{j}}</li>
      </ul>
      <div class="news">
        <a href="#" v-for="i in data.infor">
                <span>
                    <p class="newsTittle">{{i.newsTittle}}</p>
                    <p class="newsInfor">
                        <b class="userName">{{i.username}}</b>
                        <b>{{i.time}}</b>
                        <span class="num"><span class="iconfont icon-xiaoxi1"></span> {{i.num}}</span>
                    </p>
                </span>
        </a>
        <a href="#"><p class="moreBoards"><b>更多版区</b></p></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Community",
        props:["data"]
    }
</script>

<style scoped>

</style>
