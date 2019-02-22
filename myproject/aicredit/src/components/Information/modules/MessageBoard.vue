<template>
  <div class="theme">
    <div class="title">
      <div class="themeName"><span class="leftBorder"></span><h3>贷款攻略</h3></div>
      <div class="more"><a href="#"><span>更多</span></a></div>
    </div>
    <div class="strategy">
      <div class="strategyBox">
        <div class="creditNews" v-for="m in data.infor">
          <div class="newItem">
            <h3>{{m.question}}</h3>
            <div class="countDate">
              <p class="read">阅读&nbsp;{{m.count}}</p>
              <p>{{m.time}}</p>
            </div>
          </div>
          <p><img :src="data.address+m.img" alt=""></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MessageBoard",
    props:["data"],
  }
</script>

<style scoped>
  .creditNews{
    padding:.19rem 0 .17rem;
    border-bottom:1px solid #f5f5f5;
  }
  .newItem{
    justify-content: space-between;
  }
  .newItem h3{
    font-size:.16rem;
    width:90%;
    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
  }
</style>
