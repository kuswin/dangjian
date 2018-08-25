<template>
  <div>
    <MyHeader class="jim">
      <router-link to="/jifen" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>积分明细</span>
    </MyHeader>
    <div class="mic">
    <div class="micon" v-for="item in arr">
      <p class="xiang" v-text="item.typeName"></p>
      <p class="jafen">+{{item.score}}</p>
      <p class="jashi" v-text="item.updateTime
"></p>
    </div>

  </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    components:{
      MyHeader},
    data(){return{
      arr:[]}
    },
    mounted(){
      this.$axios.get("getSocre").then(res=>{
        // console.log(res.data)
        this.arr=res.data;
      })
    }
  };
</script>

<style scoped>
  .jim{
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
  }
  .fnhui .iconfont{
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }
  .mic{
    margin-top: 50px;
  }
  .micon{
    padding: 15px;
    border-bottom: solid 1px #ddd;
    height: 40px;

  }
  .micon .xiang{
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
    float: left;
  }
  .jafen{
    float: right;
    color: red;
    font-size: 15px;
  }
  .jashi{

    font-size: 14px;
    margin-top: 30px;
  }

</style>
