import { ADOPT_ANIMAL, UNADOPT_ANIMAL } from "../store/constants";

export default {
  methods: {
    adopt: function(animal) {
      this.$store.commit(ADOPT_ANIMAL, animal);
    },
    unadopt: function(animal) {
      this.$store.commit(UNADOPT_ANIMAL, animal);
    },
    toogleAdopt: function(animal) {
      const isAdopted =
        this.$store.state.adopted.find((x) => x.id === animal.id) !== undefined;
      this.$store.commit(isAdopted ? UNADOPT_ANIMAL : ADOPT_ANIMAL, animal);
    },
  },
};
