<template>
  <div>
    <MyHeader class="rey">
      <button class="fnhui" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </button>
      <span>修改个人信息</span>
      <div class="binji">
        <button @click="save">保存</button>

      </div>
    </MyHeader>
    <form class="gecont">
      <div class="lisxin">
        <span>头像</span>
        <span><label id="imgwrap">
            <input type="file" name="file" accept="image/jpeg,image/png" @change="up" class="input" >
            <img :src="item1.img" v-if="item1.img">
<!--v-model="item1.img"-->
          <!--<i class="iconfont icon-xinzeng"></i>-->
          </label></span>
      </div>
      <div class="lisxin">
        <span>姓名</span>
        <input type="text" v-model="item1.name" class="input">
      </div>
      <div class="lisxin">
        <span>身份证</span>
        <!--<span></span>-->
      </div>
      <div class="lisxin">
        <span>家庭地址</span>
        <input type="text">
      </div>
      <div class="lisxin">
        <span>工作地址</span>
        <!--<input type="text">-->
      </div>
      <div class="lisxin">
        <span>民族</span>
        <input type="text" v-model="item1.nation" class="input">
      </div>
      <div class="lisxin">
        <span>微信号</span>
        <!--<input type="text">-->
      </div>
      <div class="lisxin">
        <span>QQ号</span>
        <!--<input type="text">-->
      </div>
      <div class="lisxin">
        <span>性别</span>
        <span  class="input">
        <input type="radio" name="sex" v-model="item1.sex" :value="1" >男
        <input type="radio" name="sex" v-model="item1.sex" :value="2" >女
        </span>
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
        <span  class="input">
          <select v-model="item1.typeName" class="sec">
            <option>群众</option>
            <option>积极分子</option>
            <option>党员</option>
          </select>
        </span>
      </div>
    </form>

  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
  import axios from 'axios';
  export default {
    components:{
      MyHeader},
    data(){
      return{
        item1:{
          typeName:'',
          name:'',
          img:'',
          sex:'',
          nation:'',
          token:'',
        },
        }
      },
  mounted(){
      this.$axios.get("getUser").then(res=>{
        // console.log(res.data[0])
        this.item1=res.data[0];
      })
    },
    methods:{
      save(){
        this.$axios.post("updateAll", this.item1).then(res =>{
          // console.log(res)
          alert(res.msg)
          if (res.code==200){
            this.$router.push("/dege")
          }
        })
      },
      up($event){
        var file=$event.target.files[0];
        var form=new FormData();
        form.append("file",file);
        form.append("token",this.token);

        axios.post("https://upload-z1.qiniup.com",form,{
          headers:{"Content-Type":"multipart/form-data"}
        }).then(res=>{
          // console.log(res.data.url);
          this.item1.img=res.data.url;
        })
      },


    getToken(){
      axios.get("http://up.yaojunrong.com/getToken").then(res=>{
        this.token=res.data.data;
      })
    }
  },
  created(){
    this.getToken();
  }

  }

</script>

<style scoped>
  .rey{
    line-height: 43px;
    text-align: center;
    font-size: 18px;
    color: white;
  }
  .fnhui .iconfont{
    position: absolute;
    left: 10px;
    font-size: 31px;
    color: #fff;
  }
  .fnhui{
    float: left;
    border: 0px;
    background-color: #c50206;
    color: white;
  }

  .binji{
    float: right;
    margin-right: 10px;

  }
  .binji button{color: white;
    border: none;
    background-color: #c50206;
    outline: none;

  }
  .gecont{
    margin-top: 45px;
  }
  .lisxin{
    border-bottom: 1px solid rgba(0,0,0,0.1);
    height: 45px;
    padding: 0 10px;
  }
  .lisxin span{
    line-height: 45px;
  }
  .input{
    float: right;
    background-color: #fff;
  }
 .lisxin  input{
    border:0;
   text-align: right;
   line-height: 40px;
   outline: none;
  }
  .input select{
    border: 0px;
    background-color: #fff;
    outline: none;
  }
  .lisxin img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  #imgwrap{
    border-radius: 4px;
    float:right;
    margin-top: 10px;
    height: 20px;
  }
  #imgwrap input{

    width: 0.1px;
    border: 0px;


  }
 /*.input{display: none;}*/
  /*.upload #imgwrap img{*/
    /*float: left;*/
    /*width: 150px;*/
    /*height: 150px;*/
    /*margin-left: 10px;*/
  /*}*/

</style>
