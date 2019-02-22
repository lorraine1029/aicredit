<template>
  <div class="box">
    <combination :data="cartInfo.firstPage"></combination>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>

  import Combination from "../components/homeList/Combination"
  import BottomNav from "../components/public/BottomNav";
  import CartApis from "../apis/CartApis"
  export default {
        name: "FirstPage",
        components:{
          Combination,
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
  .box{
    height:100%;
    display: flex;
    flex-direction: column;
  }
</style>
