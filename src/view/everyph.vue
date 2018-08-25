<template>
  <div class="liangshen">
    <MyHeader class="rey">
      <router-link to="/home" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>随时随地拍</span>
    </MyHeader>
    <div class="everyp">
      <router-link :to="'/news?id='+item._id" v-for="item in arr" :key="item.id" class="item">
        <div class="bgimg">
          <img :src="item.img">
          <p v-text="item.title"></p>
        </div>
      </router-link>
    </div>
    <div class="wshu">
    <p>没有数据了</p>
  </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    components:{
      MyHeader},
    data(){
      return{
        arr:[]
      }
    },
    mounted(){
      this.$axios.get("getNews",{type:5}).then(res=>{
        // console.log(res.data)
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
  .everyp{
    display: flex;
  flex-wrap: wrap;
    margin-top: 60px;
  }
  .everyp .item{
    height:140px ;
    width: 40%;
    margin: 10px;
    margin-right: 2px;
    padding-left: 10px;
  }
 .bgimg  p{
    white-space: nowrap;
       overflow: hidden;
    text-overflow: ellipsis;
     }

  .everyp .item img{
    width: 150px;
    height: 110px;
  }
  .wshu p{
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 13px;
  }




</style>
