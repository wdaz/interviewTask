<template>
  <div class="users">
    <users-current
      :users="currentUsers"
      @updateUser="updateUser"
    ></users-current>
    <users-new :users="newUsers" @updateUser="updateUser"></users-new>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import UsersCurrent from "./components/UsersCurrent.vue";
import UsersNew from "./components/UsersNew.vue";
export default {
  components: { UsersCurrent, UsersNew },
  name: "Users",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      currentUsers: (state) =>
        state.user.users.filter((u) => u.isNew === false),
      newUsers: (state) => state.user.users.filter((u) => u.isNew === true),
    }),
  },

  methods: {
    ...mapActions({
      updateUserAction: "user/UPDATE_USER_ACTION",
    }),

    updateUser(user) {
      this.updateUserAction(user);
    },
  },
};
</script>

<style lang="scss" scoped>
.users {
  padding: 20px 0;
}
</style>
