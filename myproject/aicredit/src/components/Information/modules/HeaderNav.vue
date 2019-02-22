<template>
  <div class="headerNav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <ul class="nav swiper-slide">
          <li v-for="j in data.labels">{{j}}</li>
        </ul>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <ul class="tag swiper-slide">
          <li v-for="n in data.tags">{{n}}</li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: "HeaderNav",
      mounted() {
        this._slider()
      },
      methods:{
        _slider(){
          var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            autoplay:false,
          })
        }
      },
      props:["data"]
    }
</script>

<style scoped lang="scss">
  .headerNav{
    line-height:.42rem;
    .nav{
      height:.44rem;
      display:flex;
      border-bottom:2px solid #fbfbfb;
      justify-content: space-around;
      li{
        font-size:.16rem;
        color:#141414;
        font-weight:bolder;
      }
      li:nth-child(1){
        color:#f24850;
        border-bottom:4px solid #f24850;
      }
    }
    .tag{
      height:.65rem;
      display:flex;
      justify-content: space-around;
      align-items: center;
      li{
        height:.35rem;
        line-height:.35rem;
        padding:0 .12rem;
        background:#f4f5f7;
        font-size:.14rem;
        color:#666565;
        border-radius:.17rem;
      }
    }
  }

</style>
