<template>
  <div class="cp">
    <MyHeader class="sxb">
      <router-link to="/live" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>民主评议</span>
    </MyHeader>
    <div class="mpcon">

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
  .cp{
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
  .cp .fnhui .iconfont{
    /*float: left;*/
    position: absolute;
    left: 10px;
    font-size: 31px;
    font-size: 31px;
    color: #fff;
  }
  .cpcon{
    position: fixed;
    top: 60px;
  }




</style>

