<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>主题精选</h3></div>
      <div class="more"><a href="#"><span>全部主题</span></a></div>
    </div>
    <div class="thematic">
      <div class="themeCard">
        <a href="#" v-for="n in data.theme.imgs"><img :src="data.theme.address+n" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ThemeSelected",
        props:["data"],
    }
</script>

<style scoped lang="scss">
  .theme{
    height:1.46rem;
  }
  .thematic{
    .themeCard{
      margin-top:.08rem;
        a{
            img{
              width:1.04rem;
              height:.68rem;
              border-radius:4px;
              margin-right:5px;
            }
        }
    }
  }

</style>
