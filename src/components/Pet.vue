<template>
  <div class="pet">
      <span>{{ pet.name }}</span>
      <span>{{ pet.spacies }}</span>
      <span>{{ pet.gender }}</span>
      <span>{{ pet.age }}</span>
      <span>{{ pet.situation }}</span>
  </div>
</template>

<script>

export default {
    name: 'Pet',
    props: ['pet']
}
</script>

<style>
    .pet{
        display: flex;
        justify-content: space-between;
    }

    .pet span{
        display: flex;
        flex: 1;
    }
</style>