<template>
  <div class="join">
    <MyHeader class="rey">
      <router-link to="/mzpy" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>参党人员</span>
    </MyHeader>
    <div class="gecont">
      <div class="lisxin" v-for="item in arr">
      <router-link :to="'/comment?id='+item._id"  :key="item.id">
        <span><img :src="item.img"></span>
        <span class="name" v-text="item.name"></span>
        <span class="dangbu" v-text="item.branchName"></span>
      </router-link>
    </div>

    </div>

  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  export default {
    components:{
      MyHeader},
    data(){
      return{arr:[]}
    },
    mounted(){
      this.$axios.get("getUranch",{branchId:this.$route.query.branchId}).then(res=>{
        console.log(res)
        this.arr=res.data;
      })
      // this.$axios.get("getDiscuss").then(res => {
      //   console.log(res.data._id);
      //   this.item2.discussId = res.data._id;
      //   this.$axios.get("getOne", {userId: this.$route.query.id, discussId: this.item2.discussId}).then(res => {
      //     this.item = res.data
      //     console.log(this.item)
      //     this.item1.id=res.data._id
      //     console.log(this.item1);
      //   })
      // })
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
    font-size: 31px;
    color: #fff;
  }
  .gecont{
    margin-top: 46px;
    width: 100%;
  }
  .lisxin{
    border-bottom: 1px solid rgba(0,0,0,0.1);
    height: 45px;
    width: 100%;
    line-height: 45px;
    /*padding: 0 10px;*/
  }
  .lisxin span{
    line-height: 45px;
    height: 45px;
  }
  .lisxin img{
    margin: 5px 10px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    float: left;
  }
  .lisxin .name{
    margin: 0 6px;
    display: inline-block;
    width: 55px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dangbu{
    float: right;
  }
</style>
