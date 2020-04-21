<template>
  <div class="col-10 offset-1">
    <form>
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" class="form-control" id="name" v-model="treatment.name" />
      </div>
      <div class="form-group">
        <label for="name">Quantité</label>
        <input type="text" class="form-control" id="name" v-model="treatment.quantity" />
      </div>
      <button class="btn btn-primary" @click="save">Sauvegarder</button>
    </form>

    <router-view></router-view>
  </div>
</template>

<script>
import { SAVE_TREATMENT } from "../store/constants";

export default {
  name: "EditAnimal",
  props: ["prescriptionId", "animalId", "treatment"],
  methods: {
    save: function() {
      this.$store.commit(SAVE_TREATMENT, {
        animalId: this.animalId,
        prescriptionId: this.prescriptionId,
        treatment: this.treatment
      });
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>
