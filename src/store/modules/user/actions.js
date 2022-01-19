import userService from "@/services/user.service";

export default {
  async USERS_ACTION({ commit }) {
    return new Promise((resolve, reject) => {
      commit("USER_START");
      userService
        .users()
        .then(({ data }) => {
          commit("USER_SUCCESS", data);
          resolve(data);
        })

        .catch((result) => {
          commit("USER_FAILURE", result.data);
          reject(result);
        });
    });
  },

  async CREATE_USER_ACTION({ commit }, creadential) {
    return new Promise((resolve, reject) => {
      commit("CREATE_USER_START");
      userService
        .createUser(creadential)
        .then(({ data }) => {
          commit("CREATE_USER_SUCCESS", data);
          resolve(data);
        })

        .catch((result) => {
          commit("CREATE_USER_FAILURE", result.data);
          reject(result);
        });
    });
  },

  async UPDATE_USER_ACTION({ commit }, creadential) {
    return new Promise((resolve, reject) => {
      commit("UPDATE_USER_START");
      userService
        .updateUser(creadential)
        .then(({ data }) => {
          commit("UPDATE_USER_SUCCESS", data);
          resolve(data);
        })
        .catch((result) => {
          commit("UPDATE_USER_FAILURE", result.data);
          reject(result);
        });
    });
  },

  async DELETE_USER_ACTION({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit("DELETE_USER_START");
      userService
        .deleteUser(id)
        .then(() => {
          commit("DELETE_USER_SUCCESS", id);
          resolve(id);
        })
        .catch((result) => {
          commit("DELETE_USER_FAILURE", result.data);
          reject(result);
        });
    });
  },
};
