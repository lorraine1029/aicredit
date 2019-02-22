<template>
  <div class="loginHeader">
    <p><span class="iconfont icon-chevron-copy-copy-copy-copy-copy-copy"></span><span>登录我爱卡账号</span></p>
    <infor-input></infor-input>
  </div>
</template>

<script>
  import InforInput from "./InforInput"
    export default {
        name: "LoginHeader",
      components:{
        InforInput
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
