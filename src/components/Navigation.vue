<template>
  <nav>
    <router-link id="homeNav" to="/">Home</router-link>
    <router-link to="/Directory">Directory</router-link>
    <router-link to="/Galery">Galery</router-link>
    <router-link to="/Faq">F.A.Q</router-link>
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

</style>
