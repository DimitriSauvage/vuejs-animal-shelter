import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Cart from "./plugins/cart/cart";

Vue.use(Cart);

Vue.config.productionTip = false;

const vue = new Vue({
  router,
  store,
  vuetify,
  Cart,
  render: (h) => h(App),
}).$mount("#app");

console.log(vue);