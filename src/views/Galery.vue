<template>
  <div class="about">
    <Navigation />
    <h1>Galery</h1>
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Directory",
  components: {
    Navigation,
    Footer,
  },
};
</script>
