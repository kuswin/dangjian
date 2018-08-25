<template>
  <div class="news">
    <MyHeader class="hudong">
      <router-link to="/live" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>民主评议</span>
    </MyHeader>
    <div class="conten">
      <h1 v-html="item.title"></h1>
      <div class="ncon" v-html="item.content"></div>
    </div>
    <div class="dlist">
      <select name="" id="select" v-model="Branchid">
        <option value="0">请选择</option>
        <option v-for="item in arr" :value="item._id"><span v-text="item.branchName"></span></option>

      </select>
    </div>
    <button class="lnext" @click="jump">下一步</button>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'

  export default {
    data() {
      return {
        item: {},
        arr: [],
        Branchid: ""
      }
    },
    components: {
      MyHeader
    },
    mounted() {
      this.$axios.get("getDiscuss").then(res => {
        // console.log(res.data);
        this.item = res.data;
      })
    },
    methods: {
      getBranch() {
        this.$axios.get("getBranch").then(res => {
          // console.log(res.data);
          this.arr = res.data;
        })
      },
      jump() {
        // console.log(this.Branchid);
        this.$router.push({path: '/join', query: {branchId: this.Branchid}});
      },
      isLogin() {
        this.$axios.get("isLogin").then(res => {
          // console.log(res)
          if (res.ret == false) {
            this.$router.push("/load")
          }
        })
      }
    },
    created() {
      this.getBranch(),
        this.isLogin()
    }
  }
</script>

<style scoped>
  .news .hudong {
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
    z-index: 999;
  }

  .news .fnhui .iconfont {
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }

  .news {
    width: 100%;
    height: 1000px;
    overflow-y: auto;
  }

  .conten {
    /*position: fixed;*/
    /*top: 46px;*/
    /*left: 0;*/
    /*right: 0;*/
    margin-top: 95px;
    width: 100%;
    text-align: center;
  }

  .conten h1 {
    font-size: 16px;
    color: black;
    margin: 10px 0;
  }

  .conten .ncon p {
    margin-bottom: 10px;
    line-height: 23px;

  }

  .conten .ncon {
    margin: 20px;
    font-size: 14px;
  }

  #select {
    position: fixed;
    bottom: 108px;
    left: 40px;
    height: 40px;
    width: 50%;
    padding-left: 30px;
    border: 1px solid #c50206;
    border-radius: 4px;
    background-color: #c50206;
    color: white;
  }

  .lnext {
    position: fixed;
    bottom: 108px;
    right: 40px;
    height: 39px;
    width: 20%;
    line-height: 39px;
    text-align: center;
    color: white;
    border: 1px solid #c50206;
    border-radius: 4px;
    background-color: #c50206;

  }


</style>

