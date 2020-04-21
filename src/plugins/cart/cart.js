const defaultTemplate = `
<v-btn class="fixed-top mr-2 mt-2 ml-auto" fab elevation="12" rounded right>
{{this.$card.length()}}
</v-btn>`;

const Cart = {
  install(Vue, options) {
    console.log("Install");
    //Define the cart
    Vue.prototype.$cart = {
      //Elements in the cart
      __elements: [],
      /**
       * Get the elements in the cart
       */
      getAll: function() {
        return this.$cart.__elements;
      },
      /**
       * Add an element to the cart
       * @param {*} element Element to add
       */
      add: function(element) {
        if (!this.$cart.contains(element)) {
          this.$cart.__elements.push(element);
        }
      },
      remove: function(element) {
        const index = this.$cart.__elements.indexOf(element);
        if (index >= 0) {
          this.$cart.__elements.splice(index, 1);
        }
      },
      /**
       * Check if the cart contains an element
       * @param {*} element Element to check
       */
      contains: function(element) {
        return this.$cart.__elements.includes(element);
      },
      /**
       * Add or remove an element
       * @param {*} element Element to handle
       */
      toggle: function(element) {
        this.$cart.contains(element)
          ? this.$cart.remove(element)
          : this.$cart.add(element);
      },
      /**
       * Get the cart length
       */
      length: function() {
        return this.$cart.__elements.length;
      },
    };

    //Add a component to the plugin, with the default template, or the user template
    Vue.component(
      "Cart",
      options && options.template !== null ? options.template : defaultTemplate
    );
  },
};

export default Cart;
