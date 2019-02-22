<template>
  <div class="loginHeader">
    <p><span class="iconfont icon-chevron-copy-copy-copy-copy-copy-copy"></span><span>注册我爱卡账号</span></p>
    <reg-infor></reg-infor>
  </div>
</template>

<script>
    import RegInfor from "./RegInfor"
    export default {
        name: "RegisterHeader",
      components:{
        RegInfor
      }
    }
</script>

<style scoped lang="scss">
  .loginHeader{
    height:.89rem;
    background: #f24850;
    padding:0 .18rem;
    p{
      line-height:.54rem;
      font-size: .18rem;
      color: #ffffff;
      text-align:center;
      .iconfont{
        float:left;
      }
    }
  }
</style>
