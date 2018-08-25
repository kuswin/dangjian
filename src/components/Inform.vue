<template>
  <div>
    <MyHeader>
      <div class="tong">
        <p>通知早知道</p>
      </div>
    </MyHeader>
    <div class="neirong">
      <router-link class="rowT" :to="'/news?id='+item._id" v-for="item in arr" :key="item.id">
        <div class="laba">
          <i class="iconfont icon-xiaolaba"></i>
        </div>
        <div class="col">
          <div class="notice-title" v-text="item.title"></div>
          <div class="notice-time" v-text="item.updateTime"></div>
        </div>
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
    components: {
      MyHeader},
    data() {
      return {
        arr: []
      }
    },
    mounted() {
      this.$axios.get("getNews", {type: 9}).then(res => {
        // console.log(res.data)
        this.arr = res.data;
      })
    }
  }
</script>

<style scoped>
  .tong p {
    color: #ffffff;
    font-size: 18px;
    line-height: 43px;
    text-align: center;
  }

  .neirong {
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

  .notice-time {
    width: 190px;
    display: inline-block;
    height: 20px;
    overflow: hidden;
    font-size: 8px;
    white-space: nowrap;
  }

  .rowT {
    margin: 0;
    padding: 10px;
    color: #666;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    width: 100%;
    outline: 0;
    height: 76px;
  }

  .laba {
    padding: 20px 5px 5px;
    flex: 0 0 20%;
    max-width: 12%;
    width: 100%;
  }

  .laba .iconfont {
    font-size: 25px;
    padding: 5px;
    border-radius: 50%;
    box-sizing: border-box;
    color: #fff;
    background: #c50206;
  }

  .neirong a.router-link-active {
    border-top: 0px;
  }

  .col {
    padding: 8px;
  }

  .notice-title {
    padding: 5px 0;
    margin-right: 5px;
  }

  .wshu {
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 13px;
  }

</style>
