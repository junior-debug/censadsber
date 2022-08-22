<template>
  <div id="space01" class="section01Cont">
    <div class="cntTxtBox03 font30px">Nos complace darle la mas cordial bienvenida como nuevo miembro<br>de nuestra comunidad en Torre CentroSalud.</div>
    <div class="cntTxtBox04 font30px">CentroSalud le ofrece una inversion segura,<br>creando una relacion de confianza entre sus<br>acreedores e Inversionistas.</div>
    <div class="circleViolet01"></div>
    <div class="squareImage"><img src="../assets/img/principal.jpg" alt=""></div>
  </div>
</template>
<style scoped>
.section01Cont {
  width: 100%;
  height: 500px;
  position: relative;
  border-bottom: 1px solid black;
  float: left;
}
.cntTxtBox03{
  position: absolute;
  left: 5%;
  top: 10%;
  width: 80%;
  height: auto;
  font-family: 'CaviarDreams Bold';
  text-align: left;
  color: var(--violet-color);
}
.cntTxtBox04{
  position: absolute;
  left: 5%;
  top: 25%;
  font-family: 'CaviarDreams';
  text-align: left;
  width: 45%;
}
.circleViolet01{
  position: absolute;
  left: 68%;
  top: 20%;
  width: 350px;
  height: 350px;
  background-color: var(--lilac-color);
  border-radius: 175px;
}
.squareImage{
  position: absolute;
  left: 62%;
  top: 25%;
  width: 350px;
}
.squareImage img{
  width: 350px;
}
</style>
