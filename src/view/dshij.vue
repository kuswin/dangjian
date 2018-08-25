<template>
  <div class="liangshen">
    <MyHeader class="rey">
      <router-link to="/home" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>党员上的今天</span>
    </MyHeader>
    <div class="lcon" v-html="item.data">

    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'

  export default {
    components: {
      MyHeader
    },
    data() {
      return {
        item: {}
      }
    },
    mounted() {
      this.$axios.get("getData").then(res => {
        // console.log(res)
        this.item = res
      })
    }
  }
</script>

<style scoped>
  .rey {
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
  }

  .fnhui .iconfont {
    position: absolute;
    left: 10px;
    font-size: 30px;
    color: #fff;
  }

  .fnhui {
    float: left;
  }

  .fnhui a {
    color: #999999;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .fnhui a.router-link-active {
    color: #EF473A;
    border-top: 2px solid red;
  }

  .lcon {
    margin-top: 46px;
    padding: 0 10px;
  }

  .lcon h2 {
    font-size: 22px;
    margin: 10px 0;
  }

  .lcon p {
    font-size: 14px;
    margin: 10px 0;
  }


</style>
