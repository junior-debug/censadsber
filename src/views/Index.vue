<template>
  <div class="home">
    <Slide />
    <section01 />
    <section02 />
    <NavigationMid />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from "@/components/Slide.vue";
import Section01 from "@/components/Section01.vue";
import Section02 from "@/components/Section02.vue";
import NavigationMid from "@/components/NavigationMid.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Slide,
    Section01,
    Section02,
    NavigationMid,
    Contact,
    Footer,
  },
};
</script>
