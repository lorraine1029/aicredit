<template>
  <div class="box">
    <sub-page :data="cartInfo.fourthPage"></sub-page>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import SubPage from "../components/loans/SubPage";
  import BottomNav from "../components/public/BottomNav";
  import CartApis from "../apis/CartApis"
    export default {
        name: "FourthPage",
        components:{
          SubPage,
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
            // console.log(this.cartInfo.fourthPage)
          })
        },
      }
    }
</script>

<style scoped>
  .box{
    height:100%;
    display:flex;
    flex-direction:column;
  }
</style>
