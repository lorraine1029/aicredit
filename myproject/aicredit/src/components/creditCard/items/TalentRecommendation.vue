<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>达人推荐</h3></div>
    </div>
    <div class="creditCollect">
        <div class="VipCard">
          <div class="vipBox" v-for="i in data.infor">
            <h3>{{i.tittle}}</h3>
            <p>{{i.explain}}</p>
            <span><img :src="data.address+i.imgUrl" alt=""></span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TalentRecommendation",
        props:["data"]
    }
</script>

<style scoped lang="scss">
 .creditCollect{
   display:flex;
   .VipCard{
     display:flex;
     flex-wrap: wrap;
     .vipBox{
       width:49%;
       border:1px solid #f8f9fa;
       display:flex;
       flex-direction: column;
       justify-content:center;
       align-items:center;
       h3{
         text-align:center;
         font-size:.16rem;
         color:#434343;
       }
       p{
         text-align:center;
         width:100%;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
         font-size:.12rem;
         color:#aaaaaa;
         margin:.06rem 0 .12rem;
       }
       span{
         img{
           width:1rem;
           height:.66rem;
           border-radius:2px;
         }
       }
     }
   }
 }
 .creditCollect{
   .VipCard div:nth-child(n+3){
     width:32.5%;
     h3{
       width:100%;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
     }
     p{
       width:100%;
     }
   }
   .VipCard div:nth-child(2){
     border-right:none;
   }
   .VipCard div:last-child{
     border-right:none;
   }
 }

</style>
