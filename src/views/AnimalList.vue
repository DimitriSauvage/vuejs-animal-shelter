<template>
  <div class="w-100">
    <Cart></Cart>
    <!-- <v-btn fab elevation="12" rounded right>{{adoptedCount()}}</v-btn> -->
    <div class="mx-3">
      <div class="d-flex justify-content-start">
        <button class="btn btn-primary mb-1" @click="addAnimal">Ajouter</button>
      </div>
      <table class="table table-striped">
        <thead>
          <th>Nom</th>
          <th>Espèce</th>
          <th>Sexe</th>
          <th>Age</th>
          <th>Situation</th>
          <th>Éditer</th>
          <th>Adopter</th>
        </thead>
        <tbody>
          <tr v-for="animal in this.animals" :key="animal.id" is="AnimalListItem" :animal="animal"></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AnimalListItem from "../components/AnimalListItem";
import adopt from "../mixins/adopt";

export default {
  mixins: [adopt],
  name: "AnimalList",
  computed: {
    animals() {
      console.log(this);
      
      return this.$store.state.animals;
    }
  },
  methods: {
    addAnimal: function() {
      this.$router.push({ path: "/animals/add" });
    }
  },
  components: {
    AnimalListItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
