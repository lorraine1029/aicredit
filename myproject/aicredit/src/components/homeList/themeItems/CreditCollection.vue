<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>热门办卡</h3></div>
      <div class="more"><a href="#"><span>更多卡片</span></a></div>
    </div>
    <div class="item">
      <div class="creditBank" v-for="i in data.cardCollection">
        <h3>{{i.tittle}}</h3>
        <p>{{i.active}}</p>
        <div class="credit"><img :src="data.address+i.imgs" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CreditCollection",
       props:["data"]
    }
</script>

<style scoped>

</style>
