<template>
  <div class="navIndexCont">
    <div id="mainLogo">
      <img src="../assets/img/logoCSALUD.jpg" style="width:120px; height:auto;" alt="">
    </div>
    <nav id="mainNav">
      <div id="home" class="btnNavOfMain" @click="moveScroll(0)">Inicio</div>
      <div id="section01" class="btnNavOfMain" @click="moveScroll(625)">Secci&oacute;n 01</div>
      <div id="section02" class="btnNavOfMain" @click="moveScroll(1275)">Secci&oacute;n 02</div>
      <div id="contactus" class="btnNavOfMain" @click="moveScroll(1900)">Cont&aacute;ctenos</div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavigationIndex",
  components: {},
  methods:{
    moveScroll(axisY){
      window.scrollTo(0, axisY);
    }
  }
};
</script>
<style lang="scss">
.navIndexCont {
  width: 100%;
  height: 60px;
  border: 1px solid black;
  position: fixed;
  z-index: 100;
  background-color: white;
}
#mainLogo{
  position: relative;
  float: left;
  padding: 10px 0px 0px 2%;
}
#mainNav{
    position: relative;
    float: right;
    display: flex;
    text-transform: uppercase;
    justify-content: space-evenly;
    width: 60%;
}
</style>
