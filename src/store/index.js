import Vue from "vue";
import Vuex from "vuex";
import {
  ADD_ANIMAL,
  DELETE_ANIMAL,
  SAVE_ANIMAL,
  UPDATE_ANIMAL,
  ADD_PRESCRIPTION,
  UPDATE_PRESCRIPTION,
  SAVE_PRESCRIPTION,
  ADOPT_ANIMAL,
  UNADOPT_ANIMAL,
} from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true, //Set to false for production
  state: {
    animals: [
      {
        id: 1,
        name: "Tomom",
        spacies: "Chat",
        gender: "male",
        age: 10,
        situation: "abandoned",
      },
      {
        id: 2,
        name: "Jerry",
        spacies: "Sourie",
        gender: "femelle",
        age: 15,
        situation: "abandoned",
      },
      {
        id: 3,
        name: "Jack",
        spacies: "Moineaux",
        gender: "male",
        age: 5,
        situation: "abandoned",
      },
      {
        id: 4,
        name: "Sparrow",
        spacies: "Chat",
        gender: "femelle",
        age: 5,
        situation: "abandoned",
      },
    ],
    adopted: []
  },
  mutations: {
    /**
     * Add an animal
     * @param {*} state Current state
     * @param {*} animal Animal to add
     */
    [ADD_ANIMAL]: function(state, animal) {
      state.animals.push(animal);
    },
    /**
     * Update an animal
     * @param {*} state Current state
     * @param {*} animal Animal to update
     */
    [UPDATE_ANIMAL]: function(state, animal) {
      const index = state.animals.indexOf(animal);
      if (index >= 0) {
        state.animals[index] = animal;
      }
    },
    /**
     * Save an animal
     * @param {*} state Current state
     * @param {*} animal Animal to save
     */
    [SAVE_ANIMAL]: function(state, animal) {
      const index = state.animals.findIndex((x) => x.id === animal.id);
      this.commit(index >= 0 ? UPDATE_ANIMAL : ADD_ANIMAL, animal);
    },
    /**
     * Delete an animal
     * @param {*} state Current state
     * @param {*} animal Animal to delete
     */
    [DELETE_ANIMAL]: function(state, animal) {
      const index = state.animals.indexOf(animal);
      if (index >= 0) state.animals.splice(index, 0);
    },

    /**
     * Add a prescription
     * @param {*} state State
     * @param {*} payload Animal id and prescription
     */
    [ADD_PRESCRIPTION]: function(state, payload) {
      const { animalId, prescription } = payload;
      const animal = state.animals.find((x) => x.id === Number(animalId));
      if (animal) {
        prescription.id = animal.prescriptions.length;
        animal.prescriptions.push(prescription);
      }
    },

    /**
     * Update a prescription
     * @param {*} state Current state
     * @param {*} payload Animal id and prescription
     */
    [UPDATE_PRESCRIPTION]: function(state, payload) {
      const { animalId, prescription } = payload;
      const animal = state.animals.find((x) => x.id === Number(animalId));
      if (animal >= 0) {
        //Get prescription
        const index = animal.prescriptions.findIndex(
          (x) => x.id === prescription.id
        );
        if (index >= 0) animal.prescriptions[index] = prescription;
      }
    },
    /**
     * Save a prescription
     * @param {*} state Current state
     * @param {*} payload Payload
     */
    [SAVE_PRESCRIPTION]: function(state, payload) {
      const animal = state.animals.find((x) => x.id === payload.animalId);
      if (animal) {
        let creation = true;
        if (animal.prescription) {
          const index = animal.prescriptions.findIndex(
            (x) => x.id === payload.prescription.id
          );
          creation = index >= 0;
        }
        this.commit(creation ? ADD_PRESCRIPTION : UPDATE_PRESCRIPTION, payload);
      }
    },
    [ADOPT_ANIMAL] : function(state, animal) {
      state.adopted.push(animal);
    },
    [UNADOPT_ANIMAL] : function(state, animal) {
      const index = state.adopted.findIndex(x => x.id === animal.id);
      if (index >= 0) {
        state.adopted.splice(index, 1);
      }
    }
  },
  actions: {},
  modules: {},
});
