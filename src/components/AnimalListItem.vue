<template>
  <tr :key="animal.id">
    <td>{{ animal.name }}</td>
    <td>{{ animal.spacies }}</td>
    <td>{{ animal.gender }}</td>
    <td>{{ animal.age }}</td>
    <td>{{ animal.situation }}</td>
    <td>
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-link" @click="editAnimal">
          <i class="fas fa-edit"></i>
        </button>
      </div>
    </td>
    <td>
      <div class="d-flex justify-content-center align-items-center">
        <!--Unadopt-->
        <v-btn primary icon class="btn btn-link" @click="toogleAdopt(animal)">
          <v-icon>{{isAdopted ? "mdi-heart-broken" : "mdi-heart"}}</v-icon>
        </v-btn>
      </div>
    </td>
  </tr>
</template>

<script>
import adopt from "../mixins/adopt";

export default {
  mixins: [adopt],
  name: "AnimalListItem",
  props: ["animal"],
  methods: {
    editAnimal: function() {
      this.$router.push({ path: `/animals/edit/${this.animal.id}` });
    }
  },
  computed: {
    isAdopted: function() {
      const adopted =
        this.$store.state.adopted &&
        this.$store.state.adopted.findIndex(x => x.id == this.animal.id) >= 0;
      return adopted;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
