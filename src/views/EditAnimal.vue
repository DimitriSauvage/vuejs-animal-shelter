<template>
  <div class="col-10 offset-1">
    <div class="d-flex justify-content-center">
      <h1 class="h1">Édition des informations de {{ animal.name }}</h1>
    </div>
    <form>
      <div class="row">
        <div class="form-group col-6 px-1">
          <label for="name">Nom</label>
          <input type="text" class="form-control" id="name" v-model="animal.name" />
        </div>
        <div class="form-group col-6 px-1">
          <label for="gender">Sexe</label>
          <select class="form-control" id="gender" v-model="animal.gender">
            <option value="Mâle">Mâle</option>
            <option value="Femelle">Femelle</option>
          </select>
        </div>
        <div class="form-group col-6 px-1">
          <label for="espece">Espèce</label>
          <input class="form-control" type="text" id="espece" v-model="animal.spacies" />
        </div>
        <div class="form-group col-6 px-1">
          <label for="age">Poids</label>
          <input class="form-control" type="text" id="age" v-model="animal.age" />
        </div>
        <div class="form-group col-6 px-1">
          <label for="situation">Situation</label>
          <input class="form-control" type="text" id="situation" v-model="animal.situation" />
        </div>

        <!--Prescriptions-->
        <div class="col-12">
          <div class="d-flex justify-content-center">
            <h2>Prescriptions</h2>
            <button class="ml-2 btn btn-link" @click="addPrescription">
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <div class="d-flex justify-content-start"></div>
          <div v-if="animal.prescriptions && animal.prescriptions.length > 0">
            <div v-for="prescription in this.animal.prescriptions" :key="prescription.id">
              Date : {{prescription.date}}
              <div v-for="treatment in prescription.treatments" :key="treatment.id">
                {{treatment.name}} - {{treatment.quantity}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click="save">Sauvegarder</button>
    </form>

    <router-view></router-view>
  </div>
</template>

<script>
import { SAVE_ANIMAL } from "../store/constants";

export default {
  name: "EditAnimal",
  data: function() {
    return {
      animal: null
    };
  },
  computed: {},
  created: function() {
    this.initAnimal();
  },
  watch: {
    $route() {
      this.initAnimal();
    }
  },
  methods: {
    save: function() {
      this.$store.commit(SAVE_ANIMAL, this.animal);
      this.$router.go(-1);
    },
    initAnimal: function() {
      const tempAnimal = this.$route.params.id
        ? this.$store.state.animals.find(
            x => x.id === Number(this.$route.params.id)
          )
        : {};
      this.animal = JSON.parse(JSON.stringify(tempAnimal));
    },
    addPrescription: function() {
      this.$router.push(`/animals/edit/${this.animal.id}/prescriptions/add`)
    }
  },
  components: {}
};
</script>
