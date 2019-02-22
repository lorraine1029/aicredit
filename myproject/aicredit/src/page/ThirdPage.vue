<template>
  <div class="creditBox">
    <Slipper :data="cartInfo.thirdPage"></Slipper>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import Slipper from "../components/creditCard/Slipper"
  import BottomNav from "../components/public/BottomNav"
  import CartApis from "../apis/CartApis"
    export default {
        name: "ThirdPage",
      components:{
          BottomNav,
          Slipper
      },
      data(){
        return{
          cartInfo:[]
        }
      },
      created() {
        this._initData()
      },

      methods:{
        _initData(){
          CartApis.getCarts(data=>{
            this.cartInfo = data;
            // console.log(this.cartInfo.thirdPage.infor)
          })
        },
      }
    }
</script>

<style scoped>
.creditBox{
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>
