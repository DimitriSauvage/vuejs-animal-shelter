<template>
  <div class="col-10 offset-1">
    <form>
      <div class="form-group">
        <label for="name">Date</label>
        <input type="date" class="form-control" id="name" v-model="prescription.date" />
      </div>
      <div class="form-group col-6 px-1">
        <h3 for="name">Traitements</h3>
      </div>
      <button class="btn btn-primary" @click="save">Sauvegarder</button>
    </form>
  </div>
</template>

<script>
import { SAVE_PRESCRIPTION } from "../store/constants";

export default {
  name: "EditAnimal",
  props: ["animalId", "id"],
  data: function() {
    return {
      prescription: null
    };
  },
  methods: {
    save: function() {
      this.$store.commit(SAVE_PRESCRIPTION, {
        animalId: this.animalId,
        prescription: this.prescription
      });
      this.$router.go(-1);
    },
    initPrescription: function() {
      let tempPrescription = {};
      if (this.animalId > 0) {
        console.log("state", this.$store.state.animals);

        //Update
        if (this.id) {
          const animal = this.$store.state.animals.find(
            x => x.id === Number(this.animalId)
          );
          if (animal && animal.prescription) {
            let presc = animal.prescriptions.find(x => x.id == Number(this.id));
            if (presc) tempPrescription = presc;
          }
        }
      } else {
        alert("Aucun animal ne peut être trouvé !");
        this.$router.go(-1);
      }

      this.prescription = JSON.parse(JSON.stringify(tempPrescription));
    }
  },
  created: function() {
    this.initPrescription();
  },
  watch: {
    $route() {
      this.initPrescription();
    }
  },
  components: {}
};
</script>
