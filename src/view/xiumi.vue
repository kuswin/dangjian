<template>
  <div>
    <MyHeader class="rey">
      <router-link to="/my" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>修改密码</span>
    </MyHeader>
    <div class="formmi">
      <form action="" class="mi" @submit.prevent>
        <p>旧密码：</p>
        <input type="password" class="jiumi" v-model="formData.pwd">
        <p>新密码：</p>
        <input type="password" class="xinmi" v-model="formData.newPwd">
        <p>确认密码：</p>
        <input type="password" class="quemi" v-model="formData.newPwd2">
        <button @click="update">确认</button>
      </form>
    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'

  export default {
    components: {
      MyHeader,
    },
    data() {
      return {
        formData: {
          newPwd: '',
          pwd: '',
          newPwd2: ''
        }
      }
    },
    methods: {
      update() {
        if (this.formData.newPwd == this.formData.newPwd2) {
          this.$axios.post("getUpdate", this.formData).then(res => {
            // console.log(res.code)
            if (res.code == 200) {
              this.$router.push("/load");
            }
          })
        } else {
          alert("新密码不一致，请重新输入...");
        }
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
    font-size: 31px;
    color: #fff;
  }

  .formmi {
    margin-top: 100px;
    height: 300px;
  }

  .formmi form {
    height: 300px;
    width: 300px;
    margin: 20px auto;
  }

  .formmi p {
    color: #666;
    font-size: 15px;
    margin: 5px 0;
  }

  .formmi input {
    width: 300px;
    height: 40px;
    margin: 5px 0;
    border-radius: 4px;
    border: 1px solid #999;
  }

  .formmi button {
    width: 300px;
    height: 45px;
    margin: 5px 0;
    border-radius: 4px;
    border: 1px solid #ef473a;
    background-color: #ef473a;
    color: white;
    font-size: 15px;
  }


</style>
