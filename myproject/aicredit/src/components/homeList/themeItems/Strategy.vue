<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>攻略</h3></div>
      <div class="more"><a href="#"><span>更多</span></a></div>
    </div>
    <div class="strategy">
      <ul>
        <li v-for="s in data.business">{{s}}</li>
      </ul>
      <div class="strategyBox">
        <div class="creditNews" v-for="m in data.infor">
          <div class="newItem">
            <h3>{{m.question}}</h3>
            <div class="countDate">
              <p class="read">阅读&nbsp;{{m.count}}</p>
              <p>{{m.time}}</p>
            </div>
          </div>
          <p><img :src="data.address+m.img" alt=""></p>
        </div>
        <a href="#"><p class="moreAnswer"><b>更多攻略</b></p></a>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Strategy",
      props:["data"]
    }
</script>

<style scoped>

</style>
