<template>
  <div>
    <MyHeader>
      <img src="../img/assets/logo.png" class="headetu">
      <router-link to="/load" class="load" v-if="show">登录</router-link>
    </MyHeader>
    <div class="conten">
      <div class="swiper">
        <mt-swipe :auto="4000" class="swiper">
          <mt-swipe-item v-for="item in arr">
            <router-link   :to="'/news?id='+item.url">
            <div class="yuding"><img :src="item.img"></div>
            <div class="ziding"><p v-text="item.title"></p></div>
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="menu">
        <div class="menu-top">
          <div class="menu-xiao">
            <router-link to="/eye">
              <div class="xiaotutu">
                <img src="../img/assets/icon_01.png"></div>
              <p>信工新闻眼</p>
            </router-link>
          </div>
          <div class="menu-xiao">
            <router-link to="/live">
              <div class="xiaotutu"><img src="../img/assets/icon_02.png"></div>
              <p>掌上组织生活</p>
            </router-link>
          </div>
          <div class="menu-xiao">
            <router-link to="/hudong">
              <div class="xiaotutu"><img src="../img/assets/icon_03.png">
              </div>
              <p>党员云互动</p>
            </router-link>
          </div>
        </div>

        <div class="menu-buttom">
          <div class="menu-xiao">
            <router-link to="/yidian">
              <div class="xiaotutu"><img src="../img/assets/icon_04.png"></div>
              <p>党建一点通</p>
            </router-link>
          </div>
          <div class="menu-xiao">
            <router-link to="/liang">
              <div class="xiaotutu"><img src="../img/assets/icon_05.png"></div>
              <p>党员亮身份</p>
            </router-link>
          </div>
          <div class="menu-xiao">
            <router-link to="/dangj">
              <div class="xiaotutu"><img src="../img/assets/icon_06.png"></div>
              <p>党史上的今天</p>
            </router-link>
          </div>

        </div>
      </div>
      <div class="zhongtu">
        <img src="../img/assets/banner01.png">
      </div>
      <div class="xiamune">
        <router-link to="/" class="row1"></router-link>

        <div class="row2">
          <div class="row-shang">
            <router-link to="/everys" class="row-ge"></router-link>
            <router-link to="/jians" class="row-ge"></router-link>
          </div>
          <div class="row-shang">
            <router-link to="/evph" class="row-ge"></router-link>
            <router-link to="/tese" class="row-ge"></router-link>
          </div>
        </div>

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
        arr: [],
        show: "true"
      }
    },
    mounted() {
      this.$axios.get("getImgs").then(res => {
        // console.log(res.data)
        this.arr = res.data;
      })
    },
    methods: {
      login() {
        this.$axios.post("getLogin", this.formData).then(res => {
          // console.log(res.code)
          if (res.code == 200) {
            this.$router.push("/my");
          }
        })
      },
      isLogin() {
        this.$axios.get("isLogin").then(res => {
          // console.log(res)
          if (res.ret == true) {
            this.show = false
          }
        })
      }
    },
    created() {
      this.isLogin()
    }
  }
</script>


<style scoped>
  .headetu {
    height: 33px;
    width: 119px;
    float: left;
    margin: 4px;
  }

  .load {
    text-decoration: none;
    color: #fff;
    float: right;
    text-align: center;
    line-height: 44px;
    margin-right: 7px;
    font-weight: 400;
    font-size: 17px;
  }
  .swiper {
    margin-top: 3.3em;
    height: 187px;
    width: 100%;
  }

  .swiper img {
    width: 100%;
    height: 187px;
  }

  .swiper .yuding {
    position: absolute;
    width: 100%;
    height: 187px;
  }

  .swiper .ziding {
    position: relative;
    top: 160px;
    width: 100%;
    height: 28px;
    line-height: 28px;

    background-color: rgba(49, 49, 39, 0.8);
    color: #fff;
    font-size: 14px;

  }

  .swiper .ziding p {
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .menu {
    display: flex;
    flex-direction: column;
    height: 170px;
    background: url("../img/assets/bt_bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .menu-top {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }

  .menu-top .menu-xiao {
    flex: 1;
  }

  .menu-buttom {
    flex: 1;
    display: flex;
    justify-content: space-around;
  }

  .menu-buttom .menu-xiao {
    flex: 1;
  }

  .xiaotutu {
    margin: 0 auto;
    height: 45px;
    width: 45px;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .menu-xiao img {
    height: 45px;
    width: 45px;

  }

  .menu-xiao p {
    font-size: 12px;
    color: #666666;
    text-align: center;
  }

  .menu-xiao a.router-link-active {
    border-top: 0px;
  }

  .zhongtu img {
    height: 80px;
    width: 100%;
  }

  .xiamune {
    display: flex;
    flex-direction: row;
    height: 144px;
    background: url("../img/assets/tese.png");
    background-size: 100% 100%;
    margin-top: -3px;
    margin-bottom: 80px;
  }

  .row1 {
    flex: 1;
  }

  .row2 {
    flex: 2;
    display: flex;
  }

  .row-shang {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .row-ge {
    flex: 1;
  }

  .row-ge a.router-link-active {
    border-top: 0px;
  }

  .row1 a.router-link-active {
    border-top: 0px;
  }

</style>




















