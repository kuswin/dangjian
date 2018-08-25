<template>
  <div class="dtg">
    <MyHeader class="rey1">
      <router-link to="/my" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>个人信息</span>
      <div class="binji">
        <router-link to="/xiuge">编辑</router-link>
      </div>
    </MyHeader>
    <div class="gecont">
      <div class="lisxin">
        <span>头像</span>
        <img :src="item.img" alt="" class="right3">

      </div>
      <div class="lisxin">
        <span>姓名</span>
        <span class="right2" v-text="item.name"></span>
      </div>
      <div class="lisxin">
        <span>身份证</span>
      </div>
      <div class="lisxin">
        <span>家庭地址</span>
      </div>
      <div class="lisxin">
        <span>工作地址</span>
      </div>
      <div class="lisxin">
        <span>民族</span>
      </div>
      <div class="lisxin">
        <span>微信号</span>
      </div>
      <div class="lisxin">
        <span>QQ号</span>
      </div>
      <div class="lisxin">
        <span>性别</span>
        <span class="right">{{sex}}</span>
      </div>
      <div class="lisxin">
        <span>最高学历</span>
      </div>
      <div class="lisxin">
        <span>职称</span>
      </div>
      <div class="lisxin">
        <span>薪资水平</span>
      </div>
      <div class="lisxin">
        <span>入党时间</span>
      </div>
      <div class="lisxin">
        <span>党费最后缴纳时间</span>
      </div>
      <div class="lisxin">
        <span>当前身份</span>
        <span class="right" v-text="item.typeName">11</span>
      </div>
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
        item: {},
        sex: ''
      }
    },
    mounted() {
      this.$axios.get("getUser").then(res => {
        // console.log(res.data[0])
        this.item = res.data[0];
        if (res.data[0].sex == 1) {
          this.sex = "男"
        } else {
          this.sex = "女"
        }
      })
    },
    methods: {
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
      this.isLogin()
    },
  }
</script>

<style scoped>
  .dtg {
    width: 100%;
  }

  .rey1 {
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
    width: 100%;
  }

  .fnhui .iconfont {
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }

  .binji {
    float: right;
    margin-right: 10px;

  }

  .binji a {
    color: white;
  }

  .gecont {
    margin-top: 45px;
  }

  .lisxin {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 50px;
    padding: 0 10px;
    /*width: 100%;*/
  }

  .lisxin span {
    line-height: 51px;
  }

  .lisxin .right {
    float: right;
  }

  .lisxin img {
    width: 29px;
    height: 29px;
    border-radius: 50%;
    padding: -29px;
    margin-top: 10px;
  }

  .lisxin .right2 {
    float: right;
    text-align: right;
  }
  .right3{
    float: right;
  }

</style>
