<template>
  <div class="zg">
    <MyHeader class="sxb">
      <router-link to="/live" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>掌上组织生活</span>
    </MyHeader>
    <div class="sxcon">
      <router-link to="/gejie">
        <button>个人总结</button>
      </router-link>
      <router-link to="/mzpy">
        <button>民主评议</button>
      </router-link>
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
        abc: false,
      }
    },
    methods: {
      ddd() {
        this.abc = true
      }
    }

  }
</script>

<style scoped>
  .zg {
    line-height: 43px;

    font-size: 18px;
    color: white;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .zg .fnhui .iconfont {
    /*float: left;*/
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }

  .zg .sxcon {
    width: 100%;
    margin: 250px 0;
    height: 900px;
    text-align: center;
  }

  .zg .sxcon button {
    margin-bottom: 12px;
    height: 46px;
    width: 60%;
    border-radius: 4px;
    background-color: #EF473A;
    border: 0px;
    color: white;
    font-size: 16px;
  }
</style>

