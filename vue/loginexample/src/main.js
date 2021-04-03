import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import lazy from "vue-lazyload";

Vue.config.productionTip = true;

// Vue.use(lazy);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
