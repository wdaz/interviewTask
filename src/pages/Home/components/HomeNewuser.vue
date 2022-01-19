<template>
  <div class="overlay">
    <div class="dialog">
      <header class="dialog__header">
        <h1>Yeni istifadəçi</h1>
        <button class="button button__icon" @click="$emit('close')">
          <icons-close></icons-close>
        </button>
      </header>
      <section class="dialog__body">
        <div class="form">
          <label for="name" class="form__label"><span> A.S.A.</span></label>
          <input
            v-model="newUserModel.fullName"
            type="text"
            id="name"
            class="form__input"
            placeholder="Kamilov Kamil Kamaləddin oğlu"
            @blur="$v.newUserModel.fullName.$touch()"
            :class="{
              form__error: $v.newUserModel.fullName.$error,
            }"
          />
          <span
            class="form__error--text"
            v-if="$v.newUserModel.fullName.$error"
          >
            Tam ad vacibdir
          </span>
        </div>
        <div class="form">
          <label for="pin" class="form__label"
            ><span>FİN Kod</span>
            <span class="form__label--icon">
              <icons-question></icons-question>
            </span>
          </label>
          <input
            v-model="newUserModel.pin"
            type="text"
            id="pin"
            class="form__input"
            placeholder="6S5AQ89"
          />
        </div>
        <div class="form">
          <label for="email" class="form__label"><span>Email</span></label>
          <input
            v-model="newUserModel.email"
            type="text"
            id="email"
            class="form__input"
            placeholder="kamil.kk@gmail.com"
          />
        </div>
        <div class="form">
          <label for="codeWord" class="form__label"
            ><span>Kod sözü</span>
            <span class="form__label--icon">
              <icons-question></icons-question> </span
          ></label>
          <input
            v-model="newUserModel.codeWord"
            type="text"
            id="codeWord"
            class="form__input"
            placeholder="starboy"
          />
        </div>
        <div class="form">
          <label for="phone" class="form__label"
            ><span>Mobil nömrə</span></label
          >
          <input
            v-model="newUserModel.phone"
            type="text"
            id="phone"
            class="form__input"
            placeholder="+994501234567"
          />
        </div>
        <div class="form checkbox">
          <input
            type="checkbox"
            id="otp"
            class="form__checkbox"
            v-model="newUserModel.isOTP"
          />
          <label for="otp" class="form__label"
            ><span>SMS OTP</span>
            <span class="form__label--icon">
              <icons-question></icons-question> </span
          ></label>
        </div>
      </section>
      <footer class="dialog__footer">
        <button class="button__yellow button" @click="adduser">
          <span class="button--text">Əlavə et </span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import IconsClose from "@/components/icons/IconsClose.vue";
import IconsQuestion from "@/components/icons/IconsQuestion.vue";

import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
export default {
  name: "HomeNewUser",
  components: { IconsClose, IconsQuestion },
  data() {
    return {
      newUserModel: {
        id: Date.now(),
        fullName: null,
        pin: null,
        email: null,
        codeWord: null,
        phone: null,
        isOTP: false,
        isView: true,
        isAction: false,
        isApprov: false,
        isNew: true,
      },
    };
  },
  validations: {
    newUserModel: {
      fullName: { required },
    },
  },

  methods: {
    ...mapActions({
      createUser: "user/CREATE_USER_ACTION",
    }),
    adduser() {
      this.$v.newUserModel.$touch();
      if (!this.$v.newUserModel.$invalid) {
        this.createUser(this.newUserModel)
          .then(() => {
            this.$emit("close");
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  cursor: pointer;
}

.dialog {
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  width: 450px;
  height: 100%;
  background: white;
  padding: 107px 75px 113px 75px;
  box-sizing: border-box;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
      font-size: 18px;
      font-weight: 500;
      color: #25213b;
      line-height: 22px;
    }
  }

  &__body {
    padding-top: 60px;
  }

  &__footer {
    .button {
      width: 100%;
    }
  }
}

header,
footer {
  flex-shrink: 0;
}

section {
  flex-grow: 1;
}

.checkbox {
  flex-direction: row;
  align-items: center;

  .form__checkbox {
    margin-right: 10px;
  }
}
</style>
