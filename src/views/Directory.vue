<template>
  <div class="Directory">
    <Navigation />
    <h1>This is an Directory page</h1>
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Directory",
  components: {
    Footer,
    Navigation,
  },
};
</script>
