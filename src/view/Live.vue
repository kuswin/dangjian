<template>
  <div>
    <MyHeader class="zhang">
      <router-link to="/home" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>掌上组织生活</span></MyHeader>
    <div class="conz">
      <div class="ztu">
        <img src="../img/assets/timg.jpg">
      </div>
      <div class="tubiao">
        <div class="tbrow1">
        <div class="tbz">
          <router-link to="/study" class="tub">
            <div class="img">
            <img src="../img/assets/icon1.png">
            </div>
          <p>政治学习</p>
          </router-link>
        </div>
        <div class="tbz">
          <router-link to="/sxh" class="tub">
            <div class="img">
            <img src="../img/assets/icon2.png">
            </div>
          <p>思想汇报</p>
          </router-link>
        </div>
        <div class="tbz">
          <router-link to="/xdzj" class="tub">
            <div class="img">
            <img src="../img/assets/icon3.png">
            </div>
          <p>心得总结</p>
          </router-link>
        </div>

        </div>
        <div class="tbrow1">
        <div class="tbz">
          <router-link to="/zhge" class="tub">
            <div class="img">
            <img src="../img/assets/icon4.png">
            </div>
            <p>民主评议</p>
          </router-link>
        </div>
        <div class="tbz">
          <router-link to="/map" class="tub">
            <div class="img">
            <img src="../img/assets/icon5.png">
            </div>
          <p>流动党员找组织</p>
          </router-link>
        </div>
          <div class="tbz"></div></div>
      </div>
    </div>
  </div>

</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    components:{
      MyHeader}
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
    background: #fff;
    overflow-y: auto;
    top: 44px;
    bottom: 50px;
    position: absolute;
    right: 0;
    left: 0;
    overflow: hidden;
    width: auto;
    height: auto;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;
  }
  .ztu{
    height: 162px;
    width: 100%;
  }
  .ztu img{
    height: 180px;
    width: 100%;
  }
  .zhang{
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;

  }
.tubiao{
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
  .tbrow1{
    flex: 1;
    display: flex;
    justify-content: space-around;
    margin: 5px;
  }

  .tbrow1 .tbz{
    flex: 1;

  }
.tbz p{
    line-height: 20px;
    text-align: center;
  }
  .tbz img{
    height: 80px;
    width: 80px;
  }
  .tbz .img{
    height: 80px;
    width: 80px;
    margin:0 auto;
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
</style>
