<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>热卡推荐</h3></div>
      <div class="more"><a href="#"><span>更多卡片</span></a></div>
    </div>
    <div class="cardType">
      <div class="cardBelong" v-for="j in data.CRMD.infor">
        <div class="topTittle">
          <h3>{{j.tittle}}</h3>
          <p>{{j.discounts}}</p>
        </div>
        <div class="inforList">
          <p><img :src="data.CRMD.address+j.imgCard" alt=""></p>
          <ul>
            <li v-for="m in j.list">{{m}}</li>
          </ul>
        </div>
        <div class="bottomLabel">
          <p class="leftLabel">
            <a href="#" v-for="n in j.labels">{{n}}</a>
          </p>
          <p class="rightLabel"><a href="#">立即申请</a></p>
        </div>
      </div>
    </div>
    <div><a href="#"><p class="more"><b>更多推荐</b></p></a></div>
  </div>
</template>

<script>
    export default {
        name: "CaloriesRecommended",
        props:["data"]
    }
</script>

<style scoped lang="scss">
  .cardType{
    padding:0 .15rem;
    .cardBelong{
      padding:.21rem 0;
      .topTittle{
        h3{
          font-size:.17rem;
        }
        p{
          font-size:.12rem;
          color:#ff3c3c;
        }
      }
      .inforList{
        display:flex;
        padding:.1rem 0;
        img{
          width:1.03rem;
          height:.66rem;
          border-radius:3px;
        }
        ul{
          padding-left:.12rem;
          li{
            line-height:.21rem;
            font-size:.12rem;
            text-indent: .12rem;
            color:#8d8d8d;
            background: url("../../../assets/disc.png") no-repeat;
            background-position:0 .07rem ;
            background-size:.08rem;
          }
        }
      }
      .bottomLabel{
        display:flex;
        justify-content: space-between;
        .leftLabel{
          a{
            height:.21rem;
            padding:0 .1rem;
            font-size:.12rem;
            color:#949494;
            border:2px solid #f3f3f3;
            border-radius:.1rem;
            margin-right:5px;
          }
        }
        .rightLabel{
          a{
            height:.27rem;
            line-height:.27rem;
            border:2px solid #ff3838;
            border-radius:.13rem;
            padding:0 .12rem;
            font-size:.13rem;
            color:#ff3838;
          }
        }
      }
    }
  }
  .theme{
    padding-bottom:.08rem;
  }
  .more{
    height:.15rem;
    text-align:center;
    font-size:.12rem;
    color:#999999;
  }
</style>
