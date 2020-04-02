<template>
  <div id="app">
    <router-view :animals="animals" />
  </div>
</template>

<script>
import animals from "./values/Animals";

export default {
  data: function() {
    return {
      animals: animals
    };
  }
};
</script>

<style lang="scss"></style>
