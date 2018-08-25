<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-dangwugongkai"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/inform">
      <i class="iconfont icon-xinxi"></i>
      <span>通知早知道</span>
    </router-link>
    <router-link to="/my">
      <i class="iconfont icon-wode2"></i>
      <span>我的党建</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Tab"
  }
</script>
<!--
  router-link-active
-->
<style>
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    background-color: #fff;
    display: flex;
  }

  .footer a {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #999999;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .footer a.router-link-active {
    color: #EF473A;
    border-top: 2px solid red;
  }

  .footer .iconfont {
    font-size: 21px;
  }

</style>













