import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Directory from "../views/Directory.vue";
import Galery from "../views/Galery.vue";
import Faq from "../views/Faq.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Index,
  },
  {
    path: "/Directory",
    name: "Directory",
    component: Directory,
  },
  {
    path: "/Galery",
    name: "Galery",
    component: Galery,
  },
  {
    path: "/Faq",
    name: "Faq",
    component: Faq,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
