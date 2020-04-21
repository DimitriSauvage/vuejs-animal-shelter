<template>
  <div class="animal">
      <span>{{ animal.name }}</span>
      <span>{{ animal.spacies }}</span>
      <span>{{ animal.gender }}</span>
      <span>{{ animal.age }}</span>
      <span>{{ animal.situation }}</span>
  </div>
</template>

<script>

export default {
    name: 'Animal',
    props: ['animal']
}
</script>

<style>
    .animal{
        display: flex;
        justify-content: space-between;
    }

    .animal span{
        display: flex;
        flex: 1;
    }
</style>