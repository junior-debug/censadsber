<template>
  <div class="home">
    <NavigationIndex />
    <Slide />
    <section01 />
    <section02 />
    <Navigation />
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Slide from "@/components/Slide.vue";
import Section01 from "@/components/Section01.vue";
import Section02 from "@/components/Section02.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import NavigationIndex from "@/components/NavigationIndex.vue";

export default {
  name: "HomeView",
  components: {
    Navigation,
    Slide,
    Section01,
    Section02,
    Contact,
    Footer,
    NavigationIndex,
  }
};
</script>
