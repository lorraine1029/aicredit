<template>
    <div class="secPage">
      <Content :data="cartInfo.secPage"></Content>
      <bottom-nav></bottom-nav>
    </div>
</template>

<script>

  import Content from "../components/community/Content";
  import BottomNav from "../components/public/BottomNav";
  import CartApis from "../apis/CartApis"
    export default {
        name: "SecPage",
        components:{
          Content,
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
            // console.log(this.cartInfo.secPage)
          })
        },
      }
    }
</script>

<style scoped>
  .secPage{
    height:100%;
    display: flex;
    flex-direction: column;
  }
</style>
