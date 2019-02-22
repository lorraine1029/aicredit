<template>
    <div class="inforBox">
        <div class="userIcon">
          <img :src="userMessge.userIcon" alt="">
        </div>
        <div class="userName">
          <p>{{userMessge.username}}</p>
          <p><span class="integral">积分：{{userMessge.integral}}</span><span>经验值：{{userMessge.empiricalValue}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfor",
      data(){
          return {
            userMessge:{
              userIcon:"../../../static/img/icon/640.webp-232.jpg",
              username:"lorraine小马",
              integral:"0",
              empiricalValue:"0"
            }
          }
      }
    }
</script>

<style scoped lang="scss">
  .inforBox{
    height:.56rem;
    background:#ffffff;
    padding:.24rem .14rem;
    display:flex;
    align-items:center;
    .userIcon{
      height:.6rem;
      width:.6rem;
      img{
        height:.6rem;
        width:.6rem;
        border-radius:50%;
      }
    }
    .userName{
      margin-left:.1rem;
      p{
        line-height:.27rem;
        font-size:.15rem;
        color:#585858;
        .integral{
          margin-right:.28rem;
        }
      }
    }
  }
</style>
