import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    animals: [
      {
        name: "Tomom",
        spacies: "Chat",
        gender: "male",
        age: 10,
        situation: "abandoned",
      },
      {
        name: "Jerry",
        spacies: "Sourie",
        gender: "femelle",
        age: 15,
        situation: "abandoned",
      },
      {
        name: "Jack",
        spacies: "Moineaux",
        gender: "male",
        age: 5,
        situation: "abandoned",
      },
      {
        name: "Sparrow",
        spacies: "Chat",
        gender: "femelle",
        age: 5,
        situation: "abandoned",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
