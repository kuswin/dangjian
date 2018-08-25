<template>
  <div class="hu">
    <MyHeader class="hudong">
      <router-link to="/home" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>党员云互动</span>
    </MyHeader>
    <div class="hc">
      <div class="mint-button" @click="ddd">
        <mt-palette-button content="+" mainButtonStyle="background-color: red;color:#fff;">
          <div class="my-icon-button"></div>
        </mt-palette-button>
      </div>

      <mt-popup v-model="abc" modal=false position="bottom" class="fugai">
        <div class="zhifu">
          <form action="" class="tijiao">
            <textarea name="a" style="width:100%;height: 100px;border: none;border-radius: 2px"
                      v-model="formData.message"></textarea>
            <div>
              <button class="fa" @click="add">发布</button>
              <button class="qu" @click="cancle">取消</button>
            </div>
          </form>
        </div>
      </mt-popup>
    </div>
    <div class="hujie" v-for="item in arr">
      <div class="liuhu">
        <div class="ltoubu">
          <img :src="item.userImg" class="yuantou">
          <div class="stou">
            <span class="nic" v-text="item.userName">text6</span>
            <span class="dangyuan">党员互动</span>
            <p class="htime">
              <span><i class="iconfont icon-shijian"></i></span>
              <span v-text="item.createdAt
"></span>
              <span><i class="iconfont icon-laba"></i></span>
              <span>公开</span>

            </p>
          </div>
        </div>
        <p class="lnr" v-text="item.message">支持我党</p>
        <router-link class="huif" :to="'/huif?id='+item._id" :key="item.id">
          <p><i class="iconfont icon-message"></i>
            <span>回复</span>
          </p>
        </router-link>
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
        abc: false,
        formData: {
          message: '',
        },
        arr: [],
      }
    },
    methods: {
      ddd() {
        this.abc = true
      },
      add() {
        this.$axios.post("getAdd", this.formData).then(res => {
          // console.log(res.code)
          if (res.code == 200) {
            this.$router.push("/hudong");
          }
        })
      },
      cancle() {
        this.$router.push("/hudong");
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
      this.isLogin()
    },
    mounted() {
      this.$axios.get("getGet").then(res => {
        // console.log(res.data)
        this.arr = res.data;
      })
    }


  }
</script>

<style scoped>
  .hudong {
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
    /*margin-top: 40px;*/
    /*position: absolute;*/
  }

  .hc {
    margin-top: 48px;
  }

  .fnhui .iconfont {
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }

  .my-icon-button {
    background-color: red;
  }

  .mint-button {
    height: 70px;
    left: 78%;
    bottom: 5%;
    position: fixed;
    z-index: 10;
  }

  .zhifu {
    width: 100%;
    height: 160px;
    background-color: #f1f1f1;
  }

  .hu .fugai {
    width: 100%;
  }

  .hu {
    width: 100%;
    /*position: absolute;*/
    background-color: #EFEFF4;
  }

  .tijiao {
    padding: 14px
  }

  .fa {
    border-radius: 2px;
    border: none;
    background-color: #ef473a;
    color: #fff;
    height: 31px;
    font-size: 12px;
    width: 34px;
  }

  .qu {
    float: right;
    border-radius: 2px;
    border: none;
    background-color: #fff;
    height: 31px;
    font-size: 12px;
    width: 34px;
  }

  .hujie {
    /*position: relative;*/
    top: 48px;
    margin-bottom: 15px;
    width: 100%;
    background-color: #fff;

  }

  .liuhu img {
    width: 30px;
    height: 30px;
    float: left;
    border-radius: 50%;
    margin: 15px;
  }

  .stou {
    /*float: left;*/
    margin: 18px 10px;
    padding-top: 10px;
    margin-left: 0;
  }

  .stou .nic {
    font-size: 18px;
    margin-bottom: 3px;
    display: inline-block;
  }

  .stou .htime {
    font-size: 12px;
    margin-top: 5px;
  }

  .stou .iconfont {
    font-size: 12px;
    margin: 5px 0;
  }

  .ltoubu {
    height: 65px;
    width: 100%;
  }

  .dangyuan {
    display: inline-block;
    height: 26px;
    width: 66px;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    /*padding: 2px 8px;*/
    color: red;
    border: 1px solid red;
    border-radius: 15%/50%;
    /*position: fixed;*/
    /*right: 10px;*/
    /*margin-top: 10px;*/
    float: right;
  }

  .lnr {
    margin: 10px 15px;
    font-size: 16px;
    text-align: left;
  }

  .huif {
    text-align: right;
    /*position: fixed;*/
    /*right: 15px;*/
    /*font-size: 14px;*/
  }

  .huif p {
    padding-right: 15px;
    padding-bottom: 15px;
  }

  .huif .iconfont {
    font-size: 14px;
  }

</style>

