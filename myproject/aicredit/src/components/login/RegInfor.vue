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
      <div class="inputList">
        <span class="iconfont icon-suo"></span>
        <p><input type="password" placeholder="请设置您的密码"></p>
      </div>
      <p class="deal">
        <span class="iconfont icon-Artboard"></span>
        <span>已阅读并同意 </span> <a href="#">我爱卡用户协议</a>
      </p>
      <div class="loginButton">下一步</div>
    </div>
</template>

<script>
    export default {
        name: "RegInfor"
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
    .deal{
      padding:.13rem 0 .38rem;
      font-size:.12rem;
      text-align:center;
      .icon-Artboard{
        color:#f2434b;
      }
      span{
        color:#a9a9a9;
      }
      a{
        color:#606060;
      }
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
