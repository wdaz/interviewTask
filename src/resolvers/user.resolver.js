import store from "../store";

export default {
  async users(to, from, next) {
    await store.dispatch("user/USERS_ACTION");
    next();
  },
};
