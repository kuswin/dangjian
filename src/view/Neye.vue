<template>
    <div class="Neye">
      <MyHeader class="rey">
        <router-link to="/home" class="fnhui">
          <i class="iconfont icon-fanhui"></i>
        </router-link>
        <span>信工新闻眼</span>
      </MyHeader>
      <div class="new-list">

        <router-link :to="'/news?id='+item._id" v-for="item in arr" :key="item.id">
          <div class="newl" >
         <div class="img">
           <img :src="item.img">
         </div>
          <div class="ncont">
            <h3 class="flow2" v-text="item.title"></h3>
          </div>
          <div class="bottom-bar">
            <span v-text="item.updateTime"  class="time"></span>
            <span class="counter">
              <i class="iconfont icon-eye"></i><span v-text="item.number"></span>
            </span>
          </div></div>
        </router-link>
        <div class="wshu">
          <p>没有数据了</p>
        </div>
      </div>
    </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    data(){
      return{
        arr:[]
      }
    },
    components:{
      MyHeader},
    mounted(){
      this.$axios.get("getNews",{type:1}).then(res=>{
        console.log(res.data)
        this.arr=res.data;
      })
    }
  }
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
    font-size: 30px;
    color: #fff;
  }
  .new-list{
    /*background: #fff;*/
    /*overflow-y: auto;*/
    /*top: 44px;*/
    /*bottom: 50px;*/
    /*right: 0;*/
    /*left: 0;*/
    /*overflow: hidden;*/
    /*width: auto;*/
    /*height: auto;*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*border: 0;*/
    /*vertical-align: baseline;*/
    /*font: inherit;*/
    /*font-size: 100%;*/
    margin-top: 46px;
  }
  .newl{
    border-bottom: 1px solid rgba(0,0,0,0.1);
    height: 95px  ;
    width: 100%;
    padding: 10px;
  }
  .Neye .time{
    width:190px;
    display: inline-block;
    height: 20px;
    overflow: hidden;
    font-size: 8px;
    white-space: nowrap;
  }
  .img{
    float: left;
    margin: 10px;
  }
  .img img{
    height: 80px;
    width: 80px;
  }
  .ncont{
    margin: 20px;
  }
  .counter{
    float: right;
    margin-right: 31px;
  }
  .flow2{
    font-size: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .wshu{
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 13px;
  }
</style>
