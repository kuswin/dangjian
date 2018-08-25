<template>
  <div class="news">
    <MyHeader class="hudong">
      <router-link to="/mzpy" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>民主评议</span>
    </MyHeader>
    <div class="conten">
      <h1>个人总结</h1>
      <div class="ncon">
        <img :src="item.img">
      </div>
    </div>
    <div class="rank">
         <span class="you">
         <input type="radio" name="1" v-model="item1.content" :value="0"  id="you">
           <label for="you">&nbsp;优</label>
         </span>
        <span class="liang">
           <input type="radio" name="1" v-model="item1.content" :value="0"  id="liang">
           <label for="liang">&nbsp;良</label>
         </span>
        <span class="zhong">
         <input type="radio" name="1" v-model="item1.content" :value="0"  id="zhong">
           <label for="zhong">&nbsp;中</label>
         </span>
        <span class="cha">
         <input type="radio" name="1" v-model="item1.content" :value="0"  id="cha">
           <label for="cha">&nbsp;差</label>
         </span>
        <button @click="submit">提交</button>
      <!--<span>-->
      <!--<input type="radio" name="1" v-model="item1.content" :value="0" class="hy-radio">优-->
      <!--<input type="radio" name="1" v-model="item1.content" :value="1" class="hy-radio">良-->
      <!--<input type="radio" name="1" v-model="item1.content" :value="2" class="hy-radio">中-->
      <!--<input type="radio" name="1" v-model="item1.content" :value="3" class="hy-radio">差-->
      <!--</span>-->
      <!--<button @click="submit">提交</button>-->

    </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'

  export default {
    data() {
      return {
        item: {},
        item1: {
          content: '',
          id:''
        },
        item2: {
          discussId: '',
          userId: this.$route.query.id
        }
      }
    },
    components: {
      MyHeader
    },
    methods: {
      submit() {
        // console.log(this.item1.id)
        this.$axios.post("addCommon", this.item1).then(res => {
          alert(res.msg)
        })
      },
      ask() {
        this.$axios.get("getDiscuss").then(res => {
          // console.log(res.data._id);
          this.item2.discussId = res.data._id;
          this.$axios.get("getOne", {userId: this.$route.query.id, discussId: this.item2.discussId}).then(res => {
            if (res.data==null||res.data.status==0) {
              alert("该用户没有完善个人总结")
              this.$router.go(-1)
              // console.log(res)
            }else{
              this.item = res.data
              // console.log(res.data)
              this.item1.id=res.data._id
              // console.log(this.item1);
            }
          })
        })
      }
    }, created() {
      this.ask()
    },
  }
</script>

<style scoped>
  .news .hudong {
    line-height: 43px;
    /*text-align: center;*/
    font-size: 18px;
    width: 100%;
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
    margin-top: 50px;
    width: 100%;
  }

  .conten h1 {
    font-size: 20px;
    color: black;
    text-align: center;
    margin-left: 15px;
  }

  .conten .ncon img {
    height: 100%;
    width: 100%;
  }

  .conten .ncon p {
    margin-bottom: 10px;
    line-height: 23px;
  }

  .conten .ncon {
    margin: 10px;
  }

  .rank {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #eee;
    height: 40px;
  }

  .rank span {
    width: 80%;
    text-align: center;
    font-size: 14px;
    margin: 0 14px;
    line-height: 40px;
  }

  .rank input[type="radio"]+label::before{
    content: '\a0';
    display:inline-block;
    vertical-align: middle;
    font-size: 16px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    line-height: 1;
  }
  .rank input[type="radio"]:checked+label::before{
    background-clip:content-box;
    background-image:url("../img/assets/checkbox.png") ;
    background-size: 100%;
  }
  .rank input[type="radio"]{
    position: absolute;
    clip:rect(0,0,0,0);
  }


  /*.hy-radio {*/
    /*width: 20px;*/
    /*height: 0px;*/
    /*background-color: #000;*/
    /*!*margin-right: 30px;*!*/
    /*border-radius: 50%;*/
    /*position: relative;*/
    /*top: -15px;*/
    /*!*margin: 0 5x;*!*/
  /*}*/

  /*.hy-radio:before, .hy-radio:after {*/
    /*content: '';*/
    /*display: block;*/
    /*position: absolute;*/
    /*border-radius: 50%;*/
    /*transition: .3s ease;*/
  /*}*/

  /*.hy-radio:before {*/
    /*top: 0px;*/
    /*left: 0px;*/
    /*width: 18px;*/
    /*height: 18px;*/
    /*background-color: #fff;*/
    /*border: 1px solid #fff;*/
  /*}*/

  /*.hy-radio:after {*/
    /*top: 6px;*/
    /*left: 6px;*/
    /*width: 8px;*/
    /*height: 8px;*/
    /*background-color: #fff;*/
  /*}*/

  /*.hy-radio:checked:after {*/
    /*top: 4px;*/
    /*left: 4px;*/
    /*width: 12px;*/
    /*height: 12px;*/
    /*background: url("../img/assets/checkbox.png") no-repeat;*/
    /*background-size: 100%;*/
    /*!*padding-right: 3px;*!*/
    /*!*padding-bottom: 3px;*!*/

    /*!*padding-left: 1px;*!*/
    /*!*padding-top: 9px;*!*/
  /*}*/

  /*.hy-radio:checked:before {*/
    /*border-color: #c50206;*/
  /*}*/

  .rank button {
    height: 27px;
    width: 45px;
    border-radius: 4px;
    border: solid 1px #c50206;
    background-color: #fff;
    color: #c50206;
    outline: none;

  }


</style>

