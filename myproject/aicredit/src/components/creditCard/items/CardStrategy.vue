<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>卡攻略</h3></div>
      <div class="more"><a href="#"><span>更多</span></a></div>
    </div>
    <div class="strategy">
      <div class="strategyBox">
        <div class="creditNews" v-for="m in data.cardStrategy.infor">
          <div class="newItem">
            <h3>{{m.question}}</h3>
            <div class="countDate">
              <p class="read">阅读&nbsp;{{m.count}}</p>
              <p>{{m.time}}</p>
            </div>
          </div>
          <p><img :src="data.cardStrategy.address+m.img" alt=""></p>
        </div>
        <a href="#"><p class="moreAnswer"><b>更多卡攻略</b></p></a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "CardStrategy",
    props:["data"],
  }
</script>

<style scoped>
  .newItem h3{
    padding-right:.12rem;
  }
  .moreAnswer{
    line-height:.48rem;
  }
</style>
