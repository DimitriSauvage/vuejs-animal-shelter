import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //Animal list
  {
    path: "/animals",
    name: "Animals",
    component: () => import("../views/AnimalList.vue"),
  },
  {
    path: "/animals/add",
    name: "AddAnimal",
    component: () => import("../views/EditAnimal.vue"),
  },
  {
    path: "/animals/edit/:id",
    name: "updateAnimal",
    component: () => import("../views/EditAnimal.vue"),
  },
  {
    path: "/animals/edit/:animalId/prescriptions/add",
    name: "addPrescription",
    props: true,
    component: () => import("../components/EditPrescription.vue"),
  },
  {
    path: "/animals/edit/:animalId/prescriptions/edit/:id",
    name: "updatePrescription",
    props: true,
    component: () => import("../components/EditPrescription.vue"),
  },
  {
    path: "*",
    redirect: "/animals",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
