<template>
  <div class="news">
    <MyHeader class="hudong">
      <router-link to="/home" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>新闻详情</span>
    </MyHeader>
    <div class="conten1">
      <h1 v-text="item.title"></h1>
      <div class="ncon" v-html="item.content">
      </div>
    </div>
</div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    data(){
      return{
        item:{}
      }
    },
    components:{
      MyHeader},
    mounted(){
      this.$axios.get("getNews",{id:this.$route.query.id}).then(res=>{
        this.item=res.data[0];
      })
    }
  }
</script>

<style>
 .news .hudong{
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
    z-index: 999;
  }
 .news .fnhui .iconfont{
   position: absolute;
   left: 10px;
    font-size: 31px;
    color: #fff;
  }
 .news{
    width: 100%;
   height: 1000px;
   overflow-y: auto;
  }
  .conten1{
    /*position: fixed;*/
    /*top: 46px;*/
    /*left: 0;*/
    /*right: 0;*/
    margin-top: 46px;
    width: 100%;
  }
  .conten1 h1{
    font-size: 26px;
    color: black;
    margin: 10px;
  }
 .conten1 .ncon img{
   height:100%;
   width: 100%;
   margin-bottom: 10px;

 }
 .conten1 .ncon p{
   margin-bottom: 10px;
   line-height: 23px;
 }
 .conten1 .ncon{
   margin: 10px;
 }
</style>

