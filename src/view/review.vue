<template>
  <div class="review">
    <MyHeader class="sxb">
      <router-link to="/live" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>个人总结</span>
    </MyHeader>
    <div class="sxcon">
      <div class="shentu">
        <img src="../img/assets/reviewing.png">
        <p>正在审核中</p>
      </div>
      <router-link to="/live">
        <button>关闭</button>
      </router-link>
    </div>


  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    components:{
      MyHeader},
    data(){return{
      abc:false,
    }},
    methods:{
      ddd() {
        this.abc = true
      }
    }
  }
</script>

<style scoped>
  .review{
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .fnhui .iconfont{
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }
  .sxcon{
    width: 300px;
    margin: 100px auto;
    height: 900px;
  }
  .sxcon img{
    height: 80px;
    width: 80px;

  }
  .shentu{
    height: 200px;
    width: 100%;
    margin: 20px auto;
    color: #555555;
  }
  .sxcon button{
    margin: 30px auto;
    height: 43px;
    width: 70%;
    border-radius: 6px;
    background-color: #C50206;
    border: 0;
    color: white;
  }


</style>

