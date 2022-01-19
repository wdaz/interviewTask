import devtools from "@vue/devtools";
import Vue from "vue";
import Vuelidate from "vuelidate";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/index.scss";

if (process.env.NODE_ENV === "development") {
  devtools.connect("http://localhost", 8098);
}

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
