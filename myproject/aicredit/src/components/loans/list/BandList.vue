<template>
    <div class="listBox">
       <div class="brand" v-for="j in data.explain">
         <span class="tag" v-if="j.tag">{{j.tag}}</span>
         <div class="content">
           <p class="tagIcon"><img :src="data.addUrl+j.imgIcon" alt=""></p>
           <p class="contentRight">
             <b>{{j.merchant}}</b>
             <span>最高：{{j.limit}}</span>
           </p>
         </div>
         <p class="bottomTag">{{j.adv}}</p>
       </div>
    </div>
</template>

<script>
    export default {
        name: "BandList",
        props:["data"]
    }
</script>

<style scoped lang="scss">
  .listBox{
    padding:0 .14rem;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    .brand{
      position:relative;
      background:#ffffff;
      width:1.4rem;
      height:.63rem;
      padding:.14rem .14rem .12rem;
      border-radius:4px;
      margin-bottom:.06rem;
      .tag{
          height:.13rem;
          padding:0 .06rem;
          font-size:.11rem;
          color:#ffffff;
          background:#ff463a;
          border-top-right-radius:4px;
          position:absolute;
          top:0;
          right:0;
      }
      .content{
        display:flex;
        .tagIcon{
          margin-right:.05rem;
          img{
            border-radius:4px;
            width:.37rem;
            height:.37rem;
          }
        }
        .contentRight{
          display:flex;
          flex-direction:column;
          justify-content: space-between;
          b{
            font-size:.17rem;
          }
          span{
            font-size:.13rem;
            color:#999999;
          }
        }
      }
      .bottomTag{
        font-size:.13rem;
        color: #999999;
        line-height:.36rem;
        width:1.5rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }
    }
  }
</style>
