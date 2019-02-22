<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>热门银行</h3></div>
      <div class="more"><a href="#"><span>更多银行 </span></a></div>
    </div>
      <div class="slider swiper-container">
        <div class="swiper-wrapper" >
          <div class="swiper-slide">
            <div class="bank" v-for="(j,n) in data.hotBank.icon" v-if="n<8">
              <img :src="data.hotBank.imgUrl+data.hotBank.icon[n]" alt="">
              <p>{{data.hotBank.name[n]}}</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bank" v-for="(j,n) in data.hotBank.icon" v-if="n>=8">
              <img :src="data.hotBank.imgUrl+data.hotBank.icon[n]" alt="">
              <p>{{data.hotBank.name[n]}}</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HotBank",
        props:["data"],
        mounted() {
          this._slider()
        },
      methods:{
        _slider(){
          var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            autoplay:false,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .slider{
    height:2.01rem;
  }
  .swiper-wrapper{
    padding-top:.19rem;
  }
  .swiper-slide{
    height:1.38rem;
    display:flex;
    flex-wrap:wrap;
  }
  .bank{
    width:25%;
    /*height:50%;*/
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
      width:.43rem;
      height:.43rem;
      border-radius:50%;

    }
  }
</style>
