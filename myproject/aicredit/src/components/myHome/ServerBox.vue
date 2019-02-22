<template>
    <section>
      <ul>
        <li v-for="j in items">
          <span :class=" j.icon" class="iconfont"></span>
          <a href="#">{{j.serviceName}} <span class="iconfont icon-jiantou"></span></a>
        </li>
      </ul>
    </section>
</template>

<script>
    export default {
        name: "ServerBox",
      data(){
          return{
            items:[
              {
                icon:'icon-xinyongqia',
                serviceName:'快捷申卡'
              },
              {
                icon:'icon-jilu-copy',
                serviceName:'申卡记录'
              },
              {
                icon:'icon-icon-test',
                serviceName:'信用卡服务'
              },
              {
                icon:'icon-shequ_fuzhi',
                serviceName:'我的社区'
              },
              {
                icon:'icon-duanxin',
                serviceName:'意见反馈'
              },
              {
                icon:'icon-women',
                serviceName:'关于我们'
              }
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  section{
    padding:.1rem 0;
    ul{
      background:#ffffff;
      li{
        height:.54rem;
        line-height:.54rem;
        border-bottom:1px solid #f6f6f6;
        padding-left:.13rem;
        .iconfont{
        float:left;
          color:#f6777e;
      }
        a{
          color:#808080;
          padding:0 .11rem 0 .15rem;
          display:flex;
          justify-content: space-between;
          .iconfont{
            color:#808080
          }
        }
      }
    }

  }
</style>
