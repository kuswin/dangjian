<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style>
  .header {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 43px;
    text-align: center;
    background: #c50206;
    margin: 0;
    padding: 0;
    border-top: solid 3px #c50206;

  }

</style>
