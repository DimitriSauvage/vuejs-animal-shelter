<template>
  <table class="table table-striped">
    <thead>
      <th>Nom</th>
      <th>Sexe</th>
      <th>Espèce</th>
      <th>Race</th>
      <th>Taille</th>
      <th>Poids</th>
      <th>Éditer</th>
    </thead>
    <tbody>
      <tr v-for="animal in this.animals" :key="animal.id">
        <td>{{ animal.name }}</td>
        <td>{{ animal.gender }}</td>
        <td>{{ animal.spacies }}</td>
        <td>{{ animal.race }}</td>
        <td>{{ animal.height }}</td>
        <td>{{ animal.weight }}</td>
        <td class="d-flex justify-content-center align-items-center">
          <button class="btn btn-link" @click="editAnimal">
            <i class="fas fa-edit"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "AnimalList",
  methods: {
    editAnimal: function() {
      this.$router.push({ name: "EditAnimal" });
    }
  },
  computed: {
    animals() {
      return this.$store.state.animals
    } 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
