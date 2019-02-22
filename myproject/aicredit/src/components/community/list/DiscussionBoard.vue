<template>
    <div class="discussBord">
        <div class="user" v-for="i in data.infor">
          <div class="userHeader">
            <p><span class="headPortrait"><img :src="i.userIcon" alt=""></span><span>{{i.username}}</span></p>
            <span class="belongBank">{{i.bank}}</span>
          </div>
          <p class="topic">{{i.topic}}</p>
          <div class="details">{{i.article}}</div>
          <p class="bottomInfor">
            <span class="time"><b>{{i.time<24?i.time+"小时前":"1天前"}}</b></span>
            <span><b><span class="iconfont icon-xiaoxi1"></span> {{i.num}}</b></span>
          </p>
        </div>
      <p class="paging"><span>上一页</span><span>下一页</span></p>
    </div>
</template>

<script>
    export default {
        name: "DiscussionBoard",
        props:["data"]
    }
</script>

<style scoped lang="scss">
  .discussBord{
    margin-top:.1rem;
    background:#ffffff;
    padding:0 .1rem;
  }
  .userHeader{
    height:.27rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    p{
      display:flex;
      align-items:center;
    }
  }
  .headPortrait{
    margin-right:6px;
    display:inline-block;
    height:.21rem;
    width:.21rem;
    img{
      height:.21rem;
      width:.21rem;
      border-radius:50%;
    }
  }
  .user{
    padding:.15rem 0;
    border-bottom:2px solid #f7f7f7;
    .topic{
      font-size:.16rem;
      color:#494949;
      font-weight:bolder;
      line-height:.38rem;
    }
    .details{
      font-size:.13rem;
      color:#939393;
      line-height:.2rem;
    }
  }
  .belongBank{
    height:.27rem;
    line-height:.27rem;
    border:2px solid #efefef;
    border-radius:3px;
    padding:0 3px;
  }
  .bottomInfor{
    font-size:.12rem;
    color:#939393;
    line-height:.39rem;
    .time{
      margin-right:.1rem;
    }
  }
  .paging{
    margin:0 auto;
    width:1.2rem;
    height:.55rem;
    line-height:.55rem;
    display: flex;
    justify-content: space-between;
  }

</style>
