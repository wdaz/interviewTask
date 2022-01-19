import Vue from "vue";
import Vuex from "vuex";

// Modules

import user from "@/store/modules/user/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});
