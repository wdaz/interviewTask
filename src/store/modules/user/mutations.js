export default {
  USER_START(state) {
    state.error = null;
    state.users = [];
  },

  USER_SUCCESS(state, payload) {
    state.error = null;
    state.users = payload;
  },

  USER_FAILURE(state, payload) {
    state.error = payload;
    state.users = [];
  },

  // Create user
  CREATE_USER_START(state) {
    state.error = null;
  },

  CREATE_USER_SUCCESS(state, payload) {
    state.error = null;
    state.users = [...state.users, payload];
  },

  CREATE_USER_FAILURE(state, payload) {
    state.error = payload;
  },

  // Update user
  UPDATE_USER_START(state) {
    state.error = null;
  },

  UPDATE_USER_SUCCESS(state, payload) {
    state.error = null;
    state.users = state.users.filter((u) => u.id !== payload.id);
    state.users = [payload, ...state.users];
  },

  UPDATE_USER_FAILURE(state, payload) {
    state.error = payload;
  },

  // Delete new  user
  DELETE_USER_START(state) {
    state.error = null;
  },

  DELETE_USER_SUCCESS(state, payload) {
    state.error = null;
    state.users = state.users.filter((u) => u.id !== payload);
  },

  DELETE_USER_FAILURE(state, payload) {
    state.error = payload;
  },
};
