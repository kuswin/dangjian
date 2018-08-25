<template>
  <div>
    <MyHeader class="jida">
      <router-link to="/my" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>个人量化积分</span></MyHeader>
    <div class="conz">
      <div class="ztu">
        <img src="../img/assets/jifen.png" class="jitu">
        <p class="jishu">10.8</p>
      </div>
      <div class="mingxi">
        <router-link to="/jiming" class="lie">
          <div class="lietu"><img src="../img/assets/lxjf.png"></div>
          <div class="xinp"><span>积分明细</span>
            <span class="yo"><i class="iconfont icon-you"></i></span>
          </div>
        </router-link>
      </div>
      <div class="jigui">
        <div class="jitou">
        <span>积分规则</span>
        <span><img src="../img/assets/wenhao.png"></span></div>
        <div class="geji1">
          <!--<span class="denga">登录APP</span>-->
          <!--<span class="fenshu">5</span>-->
        </div>
        <div class="geji">
          <span class="denga">登录APP</span>
          <span class="fenshu">5</span>
        </div>

        <div class="geji">
          <span class="denga">完善个人信息</span>
          <span class="fenshu">2</span>
        </div>
        <div class="geji">
          <span class="denga">查看积分</span>
          <span class="fenshu">1</span>
        </div>
        <div class="geji">
          <span class="denga">按时交纳党费</span>
          <span class="fenshu">10</span>
        </div>
        <div class="geji">
          <span class="denga">查看通知</span>
          <span class="fenshu">2</span>
        </div>
        <div class="geji">
          <span class="denga">了解学院工作动态</span>
          <span class="fenshu">5</span>
        </div>
        <div class="geji">
          <span class="denga">上交思想汇报经审核通过</span>
          <span class="fenshu">5</span>
        </div>
        <div class="geji">
          <span class="denga">主动学习相关文件</span>
          <span class="fenshu">10</span>
        </div>
        <div class="geji">
          <span class="denga">认真撰写心得总结并上交，经审核通过</span>
          <span class="fenshu">5</span>
        </div>
        <div class="geji">
          <span class="denga">提交个人总结，并参与评议</span>
          <span class="fenshu">2</span>
        </div>
        <div class="geji">
          <span class="denga">积极参与互动</span>
          <span class="fenshu">5</span>
        </div>
        <div class="geji">
          <span class="denga">学习党建知识</span>
          <span class="fenshu">5</span>
        </div>
        <div class="geji">
          <span class="denga">学习党史</span>
          <span class="fenshu">10</span>
        </div>
        <div class="geji">
          <span class="denga">创先争优事迹</span>
          <span class="fenshu">10</span>
        </div>
        <div class="geji">
          <span class="denga">学党章，学习近平总书记系列讲话</span>
          <span class="fenshu">10</span>
        </div>
        <div class="geji">
          <span class="denga">用镜头记录两学-做过程中令人感动的人和事</span>
          <span class="fenshu">3</span>
        </div>
        <div class="geji">
          <span class="denga">关注并积极参与特色活动</span>
          <span class="fenshu">5</span>
        </div>
        <div class="geji">
          <span class="denga">制度化、常态化建设</span>
          <span class="fenshu">5</span>
        </div>

      </div>


    </div>
  </div>

</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    components:{
      MyHeader},
    methods:{
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
  }
</script>

<style scoped>
  .zhang p{
    color: #ffffff;
    font-size: 18px;
    line-height: 43px;
    text-align: center;
    border: none;
  }
</style>
<style scoped>
  .conz{
    margin-top: 44px;
  }
  .ztu{
    height: 145px;
    width: 100%;
  }
  .ztu img{
    height: 145px;
    width: 100%;
  }
  .jida{
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
  }
  .fnhui{
    position: absolute;
    left: 10px;
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
    color: white;

  }
  .jitu{
    position: absolute;
  }
  .jishu{
    position: relative;
    top:65px;
    left:169px ;
    color: white;
  }
  .lietu img{
    height: 30px;
    width: 30px;
    float: left;
    margin: 10px;
  }
  .xinp span{
    font-size: 17px;
    line-height: 45px;
  }
  .yo{
    float: right;
    margin-right: 10px;
  }
  .yo .iconfont{
    color: #ccc;
    font-size: 20px;
    line-height: 45px;
  }
  .mingxi{
    border-bottom:  solid 1px #ddd;
    border-top:  solid 1px #ddd;
    margin-top: 3px;
    height: 50px;
  }
  .geji{
    border-bottom:solid 1px #ddd ;
    height: 30px;
    width: 100%;
  }
  .geji1{
    /*border-bottom:solid 1px #ddd ;*/
    height: 3px;
    width: 100%;
    /*position: absolute;*/

  }
  .jitou{
    height: 34px;
    border-bottom: solid 1px #ddd;
    background: rgb(238, 238, 238);
  }
  .jitou span{
    font-size: 15px;
    font-weight: bold;
    margin: 10px;
    line-height: 34px;
  }
  .jitou img{
    float: right;
    font-size: 15px;
    font-weight: bold;
    margin: 10px;
  }
  .denga{
    color: rgb(153, 153, 153);
    font-size: 14px;
    margin-left: 10px;
    line-height: 30px;
  }

  .fenshu{
   /*position: relative;*/
    /*right: 0;*/
    line-height: 30px;
    float: right;
    margin-right: 10px;
    color: red;
    right: 10px;

  }





</style>
