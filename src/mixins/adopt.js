import { ADOPT_ANIMAL } from "../store/constants";

export default {
  methods: {
    adopt: function(animal) {
        this.$store.commit(ADOPT_ANIMAL, animal);
    },
  },
};
