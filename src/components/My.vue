<template>
  <div>
    <MyHeader>
      <div class="tong">
        <p>我的党建</p>
      </div>
    </MyHeader>
    <div class="woxin">
      <div class="McontenS">
        <div class="toux">
          <img :src="item.img" class="touxiang">
        </div>
        <div class="noLogin" style="line-height: 1.5;">
          <router-link to="/load" v-text="item.name">你还没有登录,请登录</router-link>
        </div>
      </div>
      <div class="liedan">
        <div class="wolie">
          <router-link to="/dege" class="lie">
            <div class="lietu"><img src="../img/assets/person.png"></div>
            <div class="xinp">
              <span>个人信息</span>
              <span class="yo"><i class="iconfont icon-you"></i></span>
            </div>
          </router-link>
        </div>
        <div class="wolie">
          <router-link to="/jifen" class="lie">
            <div class="lietu"><img src="../img/assets/lxjf.png"></div>
            <div class="xinp"><span>个人量化积分</span>
              <span class="yo"><i class="iconfont icon-you"></i></span>
            </div>
          </router-link>
        </div>
        <div class="wolie">
          <router-link to="/xiumi" class="lie">
            <div class="lietu"><img src="../img/assets/xgmm.png"></div>
            <div class="xinp"><span>修改密码</span>
              <span class="yo"><i class="iconfont icon-you"></i></span>
            </div>
          </router-link>
        </div>
        <div class="wolie">
          <router-link to="/jiaod" class="lie">
            <div class="lietu"><img src="../img/assets/icon3.png"></div>
            <div class="xinp"><span>党建缴费</span>
              <span class="yo"><i class="iconfont icon-you"></i></span>
            </div>

          </router-link>
        </div>

      </div>
      <div class="button">
        <button @click="exit" v-show="show">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'

  export default {
    data() {
      return {
        item: {},
        show: "true",
      }
    },
    components: {
      MyHeader
    },

    methods: {
      exit() {
        this.$axios.post("userLogout").then(res => {
          // console.log(res)
          this.ret = res.ret
          this.$router.go("/my");
        })
      },
      getData() {
        this.$axios.get("getUser").then(res => {
          // console.log(res.data[0])
          this.item = res.data[0];
        })
      }
    }, created() {
      this.getData()
    },
    mounted() {
      this.$axios.get("isLogin").then(res => {
        // console.log(res)
        if (res.ret == false) {
          this.show = false
        }
      })
    },
  }
</script>

<style scoped>
  .tong p {
    color: #ffffff;
    font-size: 18px;
    line-height: 43px;
    text-align: center;
  }

  .touxiang {
    width: 2.9rem;
    height: 2.9rem;
    border-radius: 50%;
  }

  .toux {
    margin: 10px auto;
    margin-top: 1.97222222rem;
    width: 2.66666667rem;
    height: 2.66666667rem;
  }

  .yo {
    float: right;
    margin-right: 10px;
  }

  .yo .iconfont {
    color: #ccc;
    font-size: 20px;
    line-height: 45px;
  }

  .woxin {
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
    margin-top: -2px;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;
  }

  .McontenS {
    height: 6.8rem;
    text-align: center;
    background: #c50206;
    color: #fff;
    padding-top: 10px;
  }

  .noLogin a {
    color: white;
    font-size: 12px;
  }

  .wolie {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 10px;
  }

  .lietu img {
    height: 30px;
    width: 30px;
    margin: 3px;
  }

  .wolie .lietu {
    float: left;
  }

  .xinp {
    line-height: 40px;
    margin-left: 50px;
  }

  .button {
    margin: 10px auto;
    width: 340px;
  }

  .button button {
    height: 45px;
    width: 340px;
    border: 0;
    border-radius: 4px;
    background-color: #c50206;
    color: white;
  }
</style>
