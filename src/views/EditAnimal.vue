<template>
  <div>
    <div class="d-flex justify-content center">
      <h1 class="h1">Édition des informations de {{ animal.name }}</h1>
    </div>

    <form>
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" class="form-control" id="name" v-model="animal.name" />
      </div>
      <div class="form-group">
        <label for="gender">Sexe</label>
        <select id="gender" v-model="animal.gender">
          <option value="Mâle">Mâle</option>
          <option value="Femelle">Femelle</option>
        </select>
      </div>
      <div class="form-group">
        <label for="espece">Espèce</label>
        <input type="text" id="espece" v-model="animal.spacies" />
      </div>
      <div class="form-group">
        <label for="race">Race</label>
        <input type="text" id="race" v-model="animal.race" />
      </div>
      <div class="form-group">
        <label for="size">Taille</label>
        <input type="text" id="size" v-model="animal.size" />
      </div>
      <div class="form-group">
        <label for="weight">Poids</label>
        <input type="text" id="weight" v-model="animal.weight" />
      </div>
    </form>
  </div>
</template>

<script>
import animals from "../values/Animals";
export default {
  name: "EditAnimal",
  props: ["id"],
  data: function() {
    const tempAnimal = animals.find(x => x.id === this.id);
    return {
      animal: tempAnimal
    };
  },
  components: {}
};
</script>
