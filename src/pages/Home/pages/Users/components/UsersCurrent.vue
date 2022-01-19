<template>
  <div>
    <p class="title">MÖVCUD İSTİFADƏÇİLƏR</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        <div class="user">
          <div class="user__info">
            <div class="user__icon">
              <icons-user></icons-user>
            </div>
            <div class="user__text">{{ user.fullName }}</div>
          </div>
          <button
            class="button"
            :class="{
              'button__yellow--outline': !isOpen(user.id),
              button__yellow: isOpen(user.id),
            }"
            @click="openDetail(user.id)"
          >
            <span class="button__yellow--text button--text">Ətraflı</span>
          </button>
        </div>
        <div class="user__detail" v-if="isOpen(user.id)">
          <div class="user__actions">
            <div class="form checkbox">
              <input
                type="checkbox"
                id="view"
                class="form__checkbox"
                v-model="user.isView"
                :disabled="user.isBlocked"
              />
              <label
                for="view"
                class="form__label"
                :class="{ disable: user.isBlocked }"
                ><span>BAXIŞ</span></label
              >
            </div>
            <div class="form checkbox action">
              <input
                type="checkbox"
                id="action"
                class="form__checkbox"
                :disabled="user.isBlocked"
                v-model="user.isAction"
                @change="changeVal(user)"
              />
              <label
                for="action"
                class="form__label"
                :class="{ disable: user.isBlocked }"
                ><span>ƏMƏLİYYAT</span></label
              >
            </div>
            <div class="form checkbox">
              <input
                type="checkbox"
                id="approv"
                class="form__checkbox"
                :disabled="user.isBlocked"
                v-model="user.isApprove"
                @change="changeVal(user)"
              />
              <label
                for="approv"
                class="form__label"
                :class="{ disable: user.isBlocked }"
                ><span>TƏSDİQ</span>
              </label>
            </div>
          </div>
          <button
            class="button"
            :class="{
              'button__red--outline': !user.isBlocked,
              button__red: user.isBlocked,
            }"
            @click="blockUnBLockUser(user)"
          >
            <div>
              <span class="button__red--icon"
                ><icons-delete></icons-delete
              ></span>
              <span class="button--text button__red--text">Bloklamaq</span>
            </div>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import IconsUser from "@/components/icons/IconsUser.vue";
import IconsDelete from "@/components/icons/IconsDelete.vue";

export default {
  name: "UsersCurrent",
  components: { IconsUser, IconsDelete },
  props: ["users"],
  data() {
    return {
      currentId: null,
    };
  },
  methods: {
    isOpen(id) {
      if (this.currentId === id) {
        return true;
      }
      return false;
    },

    openDetail(id) {
      if (!this.currentId) {
        return (this.currentId = id);
      }
      return (this.currentId = null);
    },

    blockUnBLockUser(user) {
      user.isBlocked = !user.isBlocked;
      this.$emit("updateUser", user);
    },

    changeVal(user) {
      this.$emit("updateUser", user);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  li {
    display: flex;
    flex-direction: column;
    padding: 20px 45px 20px 20px;
    border-bottom: 1px solid #fbf4ff;

    &:last-child {
      border-bottom: none;
    }

    .user {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__info {
        display: flex;
        align-items: center;
      }

      &__icon {
        padding: 12px;
        border: 1px solid #f1dbff;
        box-sizing: border-box;
        border-radius: 5px;
      }

      &__text {
        font-family: "Fira Sans";
        font-size: 17px;
        line-height: 20px;
        color: #25213b;
        margin-left: 20px;
      }

      &__actions {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__detail {
        padding-top: 30px;
      }
    }
  }
}

.checkbox {
  flex-direction: row;
  align-items: center;

  .form__checkbox {
    margin-right: 10px;
  }
}

.action {
  margin: 0 30px;
}

.button__red {
  & div {
    display: flex;
  }

  &--outline {
    & div {
      display: flex;
    }
  }
  &--icon {
    width: 18px;
    height: 18px;
    margin-right: 15px;
  }
}
</style>
