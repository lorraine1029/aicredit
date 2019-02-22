<template>
    <div class="mainBox">
      <Combine :data="cartInfo.fifthPage"></Combine>
      <bottom-nav></bottom-nav>
    </div>
</template>

<script>
  import Combine from "../components/Information/Combine";
  import BottomNav from "../components/public/BottomNav"
  import CartApis from "../apis/CartApis"
    export default {
        name: "FifthPage",
      components:{
        Combine,
        BottomNav
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
            // console.log(this.cartInfo.firstPage.questionAnswer)
          })
        },
      }
    }
</script>

<style scoped>
  .mainBox{
    display:flex;
    flex-direction:column;
    height:100%;
  }
</style>
