<template>
  <div>
    <div class="w-100 d-flex justify-content-center">
      <h1>Refuge d'Angers</h1>
    </div>
    <div class="d-flex justify-content-center">
      <AnimalList :animals="animals"></AnimalList>
    </div>
  </div>
</template>

<script>
import AnimalList from "../components/AnimalList.vue";
export default {
  name: "Home",
  props: ["animals"],
  components: {
    AnimalList
  }
};
</script>
