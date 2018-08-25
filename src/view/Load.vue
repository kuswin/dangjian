<template>
  <div class="loadjie">
    <MyHeader class="deng">
      <router-link to="/home" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>登录</span></MyHeader>
    <div class="dengconten">
      <div class="huitu">
        <img src="../img/assets/logo.png" class="hui">
      </div>
      <form class="form" @submit.prevent>

        <div class="biao-shen">
          <input type="text" placeholder="身份证号" v-model="formData.idNum">
        </div>
        <div class="biao-shen">
          <input type="password" placeholder="密码" v-model="formData.pwd">
        </div>
        <div class="biao-deng">
          <mt-button size="large" class="denglu" @click="login">登录</mt-button>
        </div>
      </form>
    </div>


  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue';
  export default {
    name:"login",
    data(){
      return{
        formData:{
          idNum:'',
          pwd:''
        }
      }
    },
    components:{
      MyHeader,
    },
    methods: {
      login() {
        this.$axios.post("getLogin",this.formData).then(res => {
          console.log(res.code)
          alert(res.msg)
          if(res.code == 200){
          this.$router.push("/my");

          }
        })
      }
    }
  }
</script>

<style scoped>
  .loadjie{
    text-decoration: none;
    text-align: center;
    color: #ffffff;
    font-size: 18px;
    position: absolute;
    top:0px;
    bottom: 0px;
    overflow-y: auto;
    margin-top: -1px;
    margin-bottom: -1px;
    height: auto;
    left: 0px;
    right: 0px;
    z-index: 9;
    background-color: #C50206;
  }
  .deng{
    line-height: 43px;
    text-align: center;
  }
  .fnhui .iconfont{
    position: absolute;
    left: 10px;
    font-size: 18px;
    color: #fff;
  }
  .hui{
    height: 60px;
    width: 260px;

  }
  .huitu{
    height: 100px;
    width: 260px;
    margin: 0 auto;
    margin-top: 80px;
  }
  .form{
    width: 13rem;
    margin: 0 auto;
  }
  .biao-shen{
    margin-bottom: 1rem;
    color: #fff;
  }
  input{
    width: 100%;
    padding:10px 0;
    border: 1px solid #ff0;
    border-radius: 4px;
    background-color: #c7000a;
    font-size: 14px;
    color: #ffffff;
  }
  .denglu{
    background-color: #E3574F;
    color:#ffffff;
    font-size: 14px;
  }
  ::-webkit-input-placeholder{
    color: #fff;
    padding: 3px;
  }
  .fnhui{
    float: left;
  }
  .fnhui  a{
    color: #999999;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
  .fnhui a.router-link-active{
    color: #EF473A;
    border-top: 2px solid red;
  }
  .fnhui .iconfont{
    font-size: 30px;
  }
</style>
