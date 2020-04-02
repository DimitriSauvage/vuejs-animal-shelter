import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EditAnimal from "../views/EditAnimal.vue";
Vue.use(VueRouter);

const routes = [
  {
    name: "AnimalList",
    path: "/animals",
    redirect: "/",
    children: [
      {
        name: "AnimalEdition",
        path: ":id",
        component: EditAnimal
      }
    ]
  },
  {
    name: "Home",
    path: "/",
    component: Home
  },
  //Let this route at last position for redirection
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
