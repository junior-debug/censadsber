<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
}
@font-face{
    font-family: 'CaviarDreams';
    src: url(../css/assets/CaviarDreams.ttf);
}
@font-face{
    font-family: 'CaviarDreams Bold';
    src: url(../css/assets/CaviarDreams_Bold.ttf);
}
@font-face{
    font-family: 'CaviarDreams BoldItalic';
    src: url(../css/assets/CaviarDreams_BoldItalic.ttf);
}
@font-face{
    font-family: 'CaviarDreams Italic';
    src: url(../css/assets/CaviarDreams_Italic.ttf);
}
:root{
    --violet-color: #c276d0;
    --lilac-color: #e1bbea;
    --grey-color: #eff0f3;
    --white-color: white;
    --fontFamily-normal: 'CaviarDreams';
    --fontFamily-bold: 'CaviarDreams Bold';
    --fontFamily-boldItalic: 'CaviarDreams BoldItalic';
    --fontFamily-italic: 'CaviarDreams Italic';
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.dis{
  display: none;
}
.btnExplorer:hover{
    background-color: var(--violet-color);
    color: var(--white-color);
}
.btnNavOfMain{
    background-color: var(--white-color);
}
.btnNavOnMain,
.btnNavOfMain{
    cursor: pointer;
    padding: 5px 20px;
    text-decoration: none;
    font-family: var(--fontFamily-bold)
}
.btnNavOfMain:hover{
    background-color: var(--violet-color);
    color: var(--white-color);
}

.btnNavOnMain{
    background-color: var(--violet-color);
    color: var(--white-color);
}
.btnForm{
    color: var(--violet-color);
}
.btnForm:hover{
    background-color: var(--lilac-color);
    color: var(--white-color);
}
.home{
  width: 100%;
  height: auto;
  position: absolute;
  top: 0px;
  left: 0px;
}
.font40px{
  font-size: 40px;
}
.font30px{
  line-height: 30px;
  font-size: 30px;
}
.font20px{
  font-size: 20px;
}
</style>
