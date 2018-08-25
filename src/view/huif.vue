<template>
  <div class="hu">
    <MyHeader class="hudong">
      <router-link to="/hudong" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>党员云互动</span>
    </MyHeader>


    <div class="hujie">


      <div class="liuhu">
        <div class="ltoubu">
          <img :src="item.userImg" class="yuantou">
          <div class="stou">
            <p class="nic" v-text="item.userName">text6</p>
            <p class="time">
              <span><i class="iconfont icon-shijian"></i></span>
              <span v-text="item.createdAt">2018-03-09 13:12:09</span>
              <span><i class="iconfont icon-laba"></i></span>
              <span>公开</span>
            </p>
          </div>
          <p class="dangyuan">党员互动</p></div>
        <p class="lnr" v-text="item.message">支持我党</p>

      </div>


      <div class="liuhu" v-for="item2 in arr">
        <div class="ltoubu">
          <img :src="item2.userImg" class="yuantou">
          <div class="stou">
            <p class="nic" v-text="item2.userName">text6</p>
            <p class="time">
              <span><i class="iconfont icon-shijian"></i></span>
              <span v-text="item2.createdAt">2018-03-09 13:12:09</span>
              <span><i class="iconfont icon-laba"></i></span>
              <span>公开</span>
            </p>
          </div>
          <p class="dangyuan">党员互动</p></div>
        <p class="lnr" v-text="item2.message">支持我党</p>
      </div>


    </div>
    <p class="wushuju">还没有数据</p>
    <div class="bottoml">
      <span class="inputi">
        <input type="text" placeholder="评论内容" v-model="item1.message">
      </span>
      <button @click="massage">评论</button>
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
        item1: {
          parentId: '',
          toUserId: '',
          message: ''
        },
        arr: []
      }
    },
    methods: {
      massage() {
        // console.log( this.item1.parentId);
        // console.log( this.item1.toUserId)
        this.$axios.post("interactReply", this.item1).then(res => {

        })
      },
      reply() {
        this.$axios.get("getReply", {parentId: this.$route.query.id}).then(res => {
          this.arr = res.data

        })
      }
    }, created() {
      this.reply()
    },
    mounted() {
      this.$axios.get("getGet", {id: this.$route.query.id}).then(res => {
        // console.log(res.data)
        this.item = res.data;
        this.item1.parentId = res.data._id;
        this.item1.toUserId = res.data.userId;
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
    position: absolute;
  }

  .fnhui .iconfont {
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }

  .hu {
    width: 100%;
    background-color: #EFEFF4;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

  }

  .hujie {
    position: relative;
    top: 48px;
    margin-bottom: 15px;
    width: 100%;

  }

  .liuhu {
    margin-bottom: 15px;
    background-color: #fff;
  }

  .liuhu img {
    width: 30px;
    height: 30px;
    float: left;
    border-radius: 50%;
    margin: 15px;
  }

  .liuhu {
    padding-bottom: 10px;
  }

  .pinglun img {
    width: 30px;
    height: 30px;
    float: left;
    border-radius: 50%;
    margin: 15px;
  }

  .stou {
    float: left;
    margin: 15px;
    margin-left: 0;
  }

  .stou .nic {
    font-size: 18px;
    margin-bottom: 3px;
  }

  .stou .time {
    font-size: 12px;
  }

  .stou .iconfont {
    font-size: 12px;
  }

  .ltoubu {
    height: 65px;
    width: 100%;
  }

  .dangyuan {
    height: 26px;
    width: 66px;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    /*padding: 2px 8px;*/
    color: red;
    border: 1px solid red;
    border-radius: 15%/50%;
    position: fixed;
    right: 10px;
    margin-top: 10px;
  }

  .lnr {
    margin: 10px 15px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .huif p {
    padding-right: 15px;
    padding-bottom: 15px;
  }

  .huif .iconfont {
    font-size: 14px;
  }

  .hu .wushuju {
    font-size: 14px;
    color: #555555;
    text-align: center;
    margin-top: 60px;
  }

  .bottoml {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 8px;
  }

  .inputi input {
    padding-left: 7px;
    height: 29px;
    width: 85%;
    background: 0 0;
    line-height: 18px;
    border-radius: 4px;
    border: solid 1px #c50206;
  }

  .bottoml button {
    background: #c50206;
    color: #fff;
    height: 29px;
    width: 37px;
    border-radius: 4px;
    border: 0;
  }

</style>

