<template>
  <div>
    <Navigation />
    <h1>F.A.Q</h1>
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
