<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>专题活动</h3></div>
      <div class="more"><a href="#"><span>更多</span></a></div>
    </div>
    <div class="thematic">
      <div class="themeCard">
        <a href="#" v-for="n in data.imgs"><img :src="data.address+n" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ThematicActivitie",
       props:["data"]
    }
</script>

<style scoped>

</style>
