<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>贷款推荐</h3></div>
      <div class="more"><a href="#"><span>更多贷款</span></a></div>
    </div>
    <div class="item business">
      <div class="itemName" v-for="i in data.loansRecomed">
        <div class="itemIcon"><img :src="data.address+i.imgs" alt=""></div>
        <div class="itemIntro">
          <h4><span>{{i.shop}}</span><b>{{i.lab}}</b></h4>
          <p>{{i.discounts}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoansRecommend",
    props:["data"]
  }
</script>

<style scoped>

</style>
