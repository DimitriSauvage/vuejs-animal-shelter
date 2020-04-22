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
        return this.__elements;
      },
      /**
       * Add an element to the cart
       * @param {*} element Element to add
       */
      add: function(element) {
        if (!this.contains(element)) {
          this.__elements.push(element);
        }
      },
      remove: function(element) {
        const index = this.__elements.indexOf(element);
        if (index >= 0) {
          this.__elements.splice(index, 1);
        }
      },
      /**
       * Check if the cart contains an element
       * @param {*} element Element to check
       */
      contains: function(element) {
        return this.__elements.includes(element);
      },
      /**
       * Add or remove an element
       * @param {*} element Element to handle
       */
      toggle: function(element) {
        this.contains(element)
          ? this.remove(element)
          : this.add(element);
      },
      /**
       * Get the cart length
       */
      length: function() {
        return this.__elements.length;
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
