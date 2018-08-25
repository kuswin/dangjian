<template>
  <div class="personalsummary-container">
    <MyHeader class="hudong">
      <button class="fnhui" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </button>
      <span>民主评议</span>
    </MyHeader>

    <div class="personalsummary-content">
      <div class="upload">
        <label id="imgwrap">
          <input type="file" name="file" accept="image/jpeg,image/png" @change="up" id="file-input">
          <img :src="item.img" v-if="item.img">
          <img src="../img/assets/upload.png" alt="">
        </label>

      </div>

      <div class="personalsummary-submit">
        <button @click="submit">
          <div class="personalsummary-sub">心得总结</div>
        </button>
      </div>

    </div>


  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  import axios from 'axios';

  export default {
    components: {
      MyHeader
    },
    name: "personalsummary",
    data() {
      return {
        token: '',
        item: {
          img: '',
          discussId: ''
        }
      }
    },
    mounted() {
      this.$axios.get("getDiscuss").then(res => {
        // console.log(res.data._id);
        this.item.discussId = res.data._id;
        // console.log(this.item.discussId)
      })
    },
    methods: {

      up($event) {
        var file = $event.target.files[0];
        var form = new FormData();
        form.append("file", file);
        form.append("token", this.token);

        axios.post("https://upload-z1.qiniup.com", form, {
          headers: {"Content-Type": "multipart/form-data"}
        }).then(res => {
          console.log(res.data.url);
          this.item.img = res.data.url;
          // console.log(this.item.img)
        })
      },
      submit() {
        console.log(this.item.img)
        this.$axios.post("summaryAdd", this.item).then(res => {
          alert(res.msg)
          // console.log(res)
          if (res.code == 200) {
            this.$router.push("/review");
          }
          else if (res.code == 400) {
            this.$router.push("/review");
          }

        })
      },
      getToken() {
        axios.get("http://up.yaojunrong.com/getToken").then(res => {
          this.token = res.data.data;
        })
      },
    },
    created() {
      this.getToken();
    }
  }
</script>

<style scoped>
  .hudong {
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
    z-index: 999;
  }

  .fnhui .iconfont {
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }

  .personalsummary-content {
    margin-top: 45px;
    overflow-y: auto;
    background: #fff;
  }

  .upload #imgwrap {
    display: flex;
    width: 6.33rem;
    height: 7.3rem;
    border-radius: 4px;
    margin: 1px;
    padding: 10px;
    margin-left: -9px;
  }

  .fnhui {
    float: left;
  }

  .hudong button {
    border: 0px;
    background-color: #c50206;
    color: white;
    line-height: 40px;
  }

  #file-input {
    display: none;
  }

  .upload #imgwrap img {
    float: left;
    width: 100px;
    height: 100px;
    margin-left: 8px;
  }

  .personalsummary-submit button {
    position: fixed;
    bottom: 70px;
    border: 0px;
    width: 100%;
    height: 50px;
    border-radius: 6px;
    color: white;
    font-size: 15px;
    background-color: #ef473a;
  }


</style>
