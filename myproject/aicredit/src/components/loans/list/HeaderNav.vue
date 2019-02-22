<template>
    <div class="headerNav">
      <ul class="loansItem">
        <li v-for="(j,n) in data.sign">
          <p><img :src="data.imgUrl+j" alt=""></p>
          <span>{{data.call[n]}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav",
        props:["data"]
    }
</script>

<style scoped lang="scss">
  .headerNav{
    height:1.35rem;
    background:#fff;
    margin-bottom:.15rem;
    .loansItem{
      overflow:hidden;
      display:flex;
      white-space: nowrap;
      overflow-x: auto;
        li{
          height:1.33rem;
          margin:0 .1rem;
          display:flex;
          flex-direction:column;
          justify-content: center;
          align-items: center;
          p{
            margin-bottom:.12rem;
            img{
              width:.56rem;
              height:.56rem;
              border-radius: 50%;
              border:2px solid #f9f9f9;
            }
          }
          span{
            font-size:.15rem;
            color:#363636;
          }
        }
    }
  }
  .loansItem li:nth-child(1){
    border-bottom:4px solid red;
  }
</style>
