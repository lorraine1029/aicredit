<template>
    <div class="bottonNav">
      <ul>
        <li><router-link to="FirstPage"><span class="iconfont icon-shouye2
"></span><b>首页</b></router-link></li>
        <li><router-link to="Secpage"><span class="iconfont icon-feiji"></span><b>社区</b></router-link></li>
        <li><router-link to="ThirdPage"><span class="iconfont icon-xinyongqia"></span><b>信用卡</b></router-link></li>
        <li><router-link to="loans"><span class="iconfont icon-money-loan"></span><b>贷款</b></router-link></li>
        <li><router-link to="infor"><span class="iconfont icon-ElecfansAPPiCON-"></span><b>资讯</b></router-link></li>
      </ul>
    </div>

</template>

<script>
    export default {
        name: "BottomNav",
    }
</script>

<style scoped>
  .bottonNav{
    border-top:1px solid #f4f4f4;
  }
</style>
