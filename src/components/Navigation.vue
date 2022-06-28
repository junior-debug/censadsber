<template>
  <nav>
    <router-link id="homeNav" to="/">Home</router-link> |
    <router-link to="/Directory">Directory</router-link> |
    <router-link to="/Galery">Galery</router-link> |
    <router-link to="/Faq">F.A.Q</router-link> |
  </nav>
</template>
<script>
export default {
  name: "index",
  mounted() {
    if (window.location.hash == "#/") {
      const homeNav = document.getElementById("homeNav");
      homeNav.style.visibility = "hidden";
    }
  },
};
</script>
<style lang="scss">
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
