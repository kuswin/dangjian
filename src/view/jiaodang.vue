<template>
  <div>
    <MyHeader class="rey">
      <router-link to="/my" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>缴纳党费</span>
    </MyHeader>
    <div class="jiaocont">
      <p>请选择支付方式</p>
      <div class="ro">
        <div class="foution1" @click="handleClick">
        <span><i  class="iconfont icon-weixin"></i></span>
        <span>微信</span>
        <span class="yo"><i  class="iconfont icon-you"></i></span>
      </div>
      </div>
      <mt-popup v-model="popupVisible" modal=false>
        <div class="zhifu">
          <p>微信支付</p>
          <img src="../img/assets/wechat.png">
        </div>
      </mt-popup>
      <div class="ro">
        <div class="foution2"  @click="ddd">
        <span><i  class="iconfont icon-zhifubao"></i></span>
        <span>支付宝</span>
        <span class="yo"><i  class="iconfont icon-you"></i></span>
      </div>
      </div>
    </div>
    <mt-popup v-model="abc"
              modal=false>
      <div class="zhifu">
        <p>支付宝支付</p>
        <img src="../img/assets/wechat.png">
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    components:{
      MyHeader},
    data(){return{
      popupVisible:false,
      abc:false,
    }
    },
    methods: {
      handleClick() {
        this.popupVisible = true
      },
      ddd() {
        this.abc = true
      },
      isLogin(){
        this.$axios.get("isLogin").then(res=>{
          // console.log(res)
          if (res.ret==false){
            this.$router.push("/load")}
        })
      }
    },
    created(){
      this.isLogin()
    },
  };
</script>

<style scoped>
  .rey{
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
  .jiaocont{
    margin-top: 50px;
  }
  .jiaocont p{
    font-size: 15px;
    font-weight: bold;
    border-bottom: solid 1px #ddd;
    line-height: 50px;
  }
  .foution1 , .foution2{
    font-size: 15px;
  }
  .foution1  .iconfont{
    font-size: 45px;
    color: #6cc143;
  }
  .foution2  .iconfont{
    font-size: 45px;
    color: #1296db;
  }
  .ro{
    border-bottom: solid 1px #ddd;
    padding: 10px;
  }
  .yo{
    float: right;
  }
  .yo .iconfont{
    color: #ccc;
    font-size: 28px;
    line-height: 45px;
  }
  .zhifu{
    height: 310px;
    width: 270px;
    background-color: #fff;
  }
  .zhifu p{
    color: #000;
    font-size: 22px;
    font-weight: normal;
    text-align: center;
    line-height: 40px;
    border-bottom: solid 1px #ddd;
  }




</style>
