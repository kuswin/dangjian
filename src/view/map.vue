<template>
  <div class="map-wrap">
    <MyHeader class="zhang">
      <router-link to="/home" class="fnhui">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      <span>账上组织生活</span></MyHeader>
  <div id="bd">
  </div>
  </div>
</template>

<script>
  import MyHeader from '../base/MyHeader.vue'
    export default {
      components:{
        MyHeader},
      data(){
        return{
          map:null
        }
      },
      methods:{
        initMap(){
        var mp =new BMap.Map('bd');
        mp.centerAndZoom(new BMap.Point( 116.404787,39.915551),15);
          mp.enableScrollWheelZoom(true);
          var marker = new BMap.Marker(new BMap.Point(116.404787,39.915551));
          var label = new BMap.Label("北京天安门",{offset:new BMap.Size(20,-10)});
          marker.setLabel(label);
          mp.addOverlay(marker);
          var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM, offset: new BMap.Size(20, 60)});
          mp.addControl(top_right_navigation);
          var geolocationControl = new BMap.GeolocationControl();
          mp.addControl(geolocationControl);
                  }
      },
      created(){
        this.$nextTick(()=>{
          this.initMap();
        })
      }

    }
</script>

<style scoped>
  .zhang{
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
  .map-wrap{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
  #bd{
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }

</style>
