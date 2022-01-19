<template>
  <main>
    <section class="card">
      <header class="card__header">
        <nav>
          <router-link :to="{ name: 'Users' }">İstifadəçilər</router-link>
          <router-link :to="{ name: 'Limits' }">Limitlər</router-link>
        </nav>
      </header>
      <div class="card__body">
        <router-view />
      </div>
    </section>
    <div class="card__footer">
      <button class="button button__purple" @click="dialog = true">
        <span class="button--text button__purple--text">
          <icon-plus class="icon"></icon-plus>
          <span>Yeni istifadəçi</span>
        </span>
      </button>
    </div>

    <home-newuser v-if="dialog" @close="dialog = false"></home-newuser>
  </main>
</template>

<script>
import IconPlus from "@/components/icons/IconPlus.vue";
import HomeNewuser from "./components/HomeNewuser.vue";
export default {
  name: "Home",
  components: { IconPlus, HomeNewuser },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card {
  width: 1012px;
  background: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  &__header {
    nav {
      display: flex;

      a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: normal;
        line-height: 20px;
        padding: 20px;
        color: #ababab;
        border-bottom: 4px solid #f0f0f0;

        &:first-child {
          border-top-left-radius: 10px;
        }

        &:last-child {
          border-top-right-radius: 10px;
        }

        &.active {
          color: #25213b;
          background-color: #fffcee;
          border-bottom: 4px solid #ffd217;
          font-weight: 500;
        }
      }
    }
  }

  &__body {
    overflow-y: auto;
    height: 480px;
    padding-right: 1px;
  }

  &__footer {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.icon {
  margin-right: 15px;
  font-weight: 250;
}

.button--text {
  font-weight: 400;
}
</style>
