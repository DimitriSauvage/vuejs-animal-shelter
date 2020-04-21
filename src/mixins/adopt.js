export default {
  methods: {
    adopt: function(animal) {
      this.$cart.add(animal);
    },
    unadopt: function(animal) {
      this.$cart.remove(animal);
    },
    toogleAdopt: function(animal) {
      this.$cart.toggle(animal);
    }
  },
};
