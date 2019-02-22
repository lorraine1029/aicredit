<template>
  <div class="plateNav">
    <ul>
      <li>精选</li>
      <router-link to="/BoardCommunity"><li>版区</li></router-link>
      <router-link to="/login"><li>我的社区</li></router-link>
    </ul>
    <div class="topPost">
      <p>卡圈热帖</p>
      <p>贷款热帖</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import BoardCommunity from "../../board/BoardCommunity"
  import $ from 'jquery'
    export default {
        name: "Plate",
      components:{
        BoardCommunity
      }
    }
</script>

<style scoped>
  .plateNav ul{
    height:.42rem;
    display:flex;
    justify-content:space-around;
    background:#ffffff;
  }
  .plateNav ul li{
    font-weight:bolder;
    line-height:.42rem;
    font-size:.17rem;
    color:#282828;
    height:.4rem;
  }
  .plateNav li:hover{
    color:#ff3d3d;
    border-bottom:5px solid #ff3d3d;
  }

  .topPost{
    height:.45rem;
  }
  .topPost p{
    width:50%;
    text-align:center;
    float:left;
    line-height:.45rem;
  }
</style>
