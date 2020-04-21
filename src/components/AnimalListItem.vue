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
        <span v-if="!animal.adopted">Trop tard !</span>
        <button v-else class="btn btn-link" @click="adopt(animal)">
          <i class="fas fa-heart"></i>
        </button>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
