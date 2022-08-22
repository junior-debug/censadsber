<template>
  <div id="space02" class="section02Cont">
    <div class="circleImg01"></div>
    <div class="circleImg02"></div>
    <div class="circleImg03"></div>
    <div class="circleBack02"></div>
    <div class="cntTxtBox05"></div>
    <div class="cntTxtBox06"></div>
    <div class="midBtnToKnow"></div>
  </div>
</template>
<style scoped>
.section02Cont {
  width: 100%;
  height: 1000px;
  position: relative;
  border-bottom: 1px solid black;
  float: left;
}
.circleImg01{
  position: absolute;
  left: 5%;
  top: 7%;
  border-radius: 150px;
  width: 300px;
  height: 300px;
  border: 1px solid black;
  z-index: 2;
}
.circleImg02{
  position: absolute;
  left: 20%;
  top: 40%;
  border-radius: 165px;
  width: 270px;
  height: 270px;
  border: 1px solid black;
  z-index: 2;
}
.circleImg03{
  position: absolute;
  left: 7%;
  top: 60%;
  border-radius: 110px;
  border: 1px solid black;
  width: 220px;
  height: 220px;
  z-index: 2;
}
.circleBack02{
  position: absolute;
  top: 15%;
  left: 5%;
  width: 400px;
  height: 400px;
  border-radius: 150px;
  background-color: var(--violet-color);
}
</style>
