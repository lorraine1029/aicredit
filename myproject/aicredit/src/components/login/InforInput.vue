<template>
    <div class="inputBox">
        <div class="inputList">
          <span class="iconfont icon-wodetubiao-"></span>
          <p><input type="text" placeholder="手机号码"></p>
        </div>
      <div class="inputList">
        <span class="iconfont icon-duanxin"></span>
        <p><input type="text" placeholder="请输入短信验证码"><span class="check">发送验证码</span></p>
      </div>
      <a href="#/reg"><p class="reg">立即注册</p></a>
      <div class="loginButton">立即登录</div>
    </div>
</template>

<script>
    export default {
        name: "InforInput"
    }
</script>

<style scoped lang="scss">
  .inputBox{
    height:4.2rem;
    background:#ffffff;
    border-radius:6px;
    padding:.27rem;
    .inputList{
      height:.43rem;
      display:flex;
      align-items: center;
      margin-bottom:.12rem;
      .icon-wodetubiao-{
        font-size:.2rem;
      }
      p{
        border-bottom:1px solid #cbcbcb;
        width:99%;
        height:100%;
        display:flex;
        align-items: center;
        margin-left:.08rem;
        font-size:.15rem;
        color:#cbcbcb;
        input{
          border:none;
          margin:auto 0;
          height:100%;
          outline: none;
        }
        .check{
          height:.22rem;
          padding:0 .05rem;
          border:2px solid #f9aeb1;
          color:#f46a70;
          border-radius:5px;
        }
      }
    }
    .reg{
      font-size:.13rem;
      color:#6e6e6e;
      float:right;
      margin-bottom:.37rem;
    }
    .loginButton{
      clear:both;
      height:.42rem;
      line-height:.42rem;
      text-align:center;
      font-size:.15rem;
      background:#f24850;
      color: #ffffff;
      border-radius:3px;
    }
  }
</style>
