<template>
  <div id="app">
    <router-view></router-view>
    <Tab v-if="$route.name=='home'||$route.name=='my'||$route.name=='inform'"></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue'
  import MyHeader from './base/MyHeader.vue'

  export default {
    name: 'App',
    components: {
      Tab, MyHeader
    }
  }
</script>

<style>
  @import 'style/init.css';
</style>
