<template>
  <div id="slide" class="slideCont">
    <div id="slide01" class="slidePage">
      <div class="cntTxtBox01">El espacio ideal<br>para ti y tus pacientes</div>
      <div class="cntTxtBox02">
        <div class="innerBox01"><span class="font40px">20 a&ntilde;os</span><br><span class="font20px">de trayectoria</span></div>
        <div class="innerBox02"><span class="font20px">Espacios en alquiler</span><br><span class="font20px">de </span><span class="font30px">34</span><span class="font20px"> hasta </span><span class="font30px">54</span><span class="font20px"> mts</span></div>
        <div class="innerBox03"><span class="font30px">Ubicados en</span><br><span class="font20px">San Bernardino</span></div>
      </div>
      <img src="../assets/img/Banner-1-inicio.jpg" alt="">
    </div>
    <div id="slide02" class="slidePage dis">
      <h1>Slide 2</h1>
    </div>
    <div id="slide03" class="slidePage dis">
      <h1>Slide 3</h1>
    </div>
    <div id="slide04" class="slidePage dis">
      <h1>Slide 4</h1>
    </div>
    <div id="slide05" class="slidePage dis">
      <h1>Slide 5</h1>
    </div>
    <div class="btnSlidePrev">Prev</div>
    <div class="btnSlideNext">Next</div>
    <div class="paginatorCnt">Paginator Buttons</div>
  </div>
</template>
<style scoped>
.slideCont {
  margin-top: 60px;
  width: 100%;
  height: auto;
  position: relative;
  border: 1px solid black;
  float: left;
}
.slidePage{
  width: 100%;
  height: auto;
  position: relative;
  float: left;
  z-index: 1;
}
.slidePage img{
  width: 100%;
}
.btnSlidePrev{
  position: absolute;
  margin-left: 0px;
  width: 50px;
  height: 50px;
  margin-top: 170px;
  z-index: 2;
}
.btnSlideNext{
  position: absolute;
  right: 0px;
  width: 50px;
  height: 50px;
  margin-top: 170px;
  z-index: 2;
}
.paginatorCnt{
  position: relative;
  width: 100%;
  height: 40px;
  float: left;
}
.cntTxtBox01{
  position: absolute;
  margin: 12% 0px 0px 43%;
  width: 700px;
  height: 170px;
  font-family: 'CaviarDreams Bold';
  font-size: 60px;
}
.cntTxtBox02{
  position: absolute;
  right: 0px;
  top: 90%;
  padding: 5px 0px 5px 0px;
  line-height: 20px;
  width: 50%;
  height: 100px;
  font-family: 'CaviarDreams Bold';
  background-color: var(--violet-color);
  color: white;
}
.innerBox01{
  position: relative;
  float: left;
  padding-top: 30px;
  border-right: 2px solid white;
  width: 30%;
  height: 70px;
}
.innerBox02{
  position: relative;
  float: left;
  padding-top: 30px;
  border-right: 2px solid white;
  width: 35%;
  height: 70px;
}
.innerBox03{
  position: relative;
  float: left;
  padding-top: 30px;
  width: 34%;
  height: 70px;
}
</style>
