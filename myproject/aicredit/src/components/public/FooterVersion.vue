<template>
  <footer>
    <div class="website">
        <span class="map">
            <a href="#" v-for="i in map">{{i}}</a>
        </span>
      <p><span>&copy;{{version}}</span> <span class="iconfont down icon-arrow-down" @click="show()"></span></p>
    </div>
    <div class="blogroll">
      <h4>友情链接</h4>
      <span>
            <a href="#" v-for="(j,n) in blogroll">{{j}}</a><span class="iconfont up icon-tjiantou" @click="hidden"></span>
        </span>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "FooterVersion",
      data(){
          return{
            map:['手机版','APP','网站地图','联系客服'],
            version:"2005-2018 m.51credit.com",
            blogroll:[
              "工商银行信用卡中心",
              "光大银行信用卡中心",
              "广发银行信用卡中心",
              "建设银行信用卡中心",
              "交通银行信用卡中心"],
          }
      },
      methods:{
        show(){
          $(".map").css({"display":"block"})
          $(".blogroll").css({"display":"block"});
          $(".down").css({"opacity":"0"})
        },
        hidden(){
          $(".map").css({"display":"none"});
          $(".blogroll").css({"display":"none"});
          $(".down").css({"opacity":"1"})
        }
      }
    }
</script>

<style scoped>
  .iconfont{
    margin-top:.06rem;
  }
</style>
