<template>
  <div class="NavIndexCont">
    <nav>
      <a href="#slide">Home</a> | <a href="#section01">section01</a> |
      <a href="#section02">section02</a> |
      <a href="#contac">Contac</a>
    </nav>
  </div>
</template>
<script></script>
<style lang="scss">
.NavIndexCont {
  width: 100%;
  height: 5em;
  border: 1px solid black;
  position: fixed;
  z-index: 100;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
