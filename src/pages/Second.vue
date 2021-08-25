<template>
  <div class="second">
    <div class="header-wrapper">
      <Header :text="text" />
      <img src="../assets/eye-s.svg" alt="eye" class="eye" />
    </div>
    <div class="content">
      <div class="question">
        Когда Вы чувствуете себя наиболее комфортно?
      </div>
      <div class="answers">
        <Button @click="setMorning" text="Утро" class="answers--item" />
        <Button @click="setNoon" text="День" class="answers--item" />
        <Button @click="setEvening" text="Вечер" class="answers--item" />
        <Button @click="setNight" text="Ночь" class="answers--item" />
      </div>
    </div>
    <div class="number">Вопрос 2-5</div>
    <img src="../assets/moon.svg" alt="moon" class="moon" />
  </div>
</template>

<script>
import { mapActions } from "vuex"
import Button from "../components/Button/Button.vue"
import Header from "../components/Header/Header.vue"

export default {
  components: { Button, Header },
  name: "Second",
  data() {
    return {
      text:
        "Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.",
    }
  },
  methods: {
    ...mapActions([
      "SET_DAYTIME_MORNING",
      "SET_DAYTIME_NOON",
      "SET_DAYTIME_EVENING",
      "SET_DAYTIME_NIGHT",
    ]),
    setMorning() {
      this.SET_DAYTIME_MORNING()
      this.$router.push({ name: "third" })
    },
    setNoon() {
      this.SET_DAYTIME_NOON()
      this.$router.push({ name: "third" })
    },
    setEvening() {
      this.SET_DAYTIME_EVENING()
      this.$router.push({ name: "third" })
    },
    setNight() {
      this.SET_DAYTIME_NIGHT()
      this.$router.push({ name: "third" })
    },
  },
}
</script>

<style scoped lang="scss">
.second {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  .header-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ffffff60;
    position: relative;

    .eye {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  .content {
    @include d-flex-center;
    flex-direction: column;
    padding: 20px;

    .question {
      color: $golden;
      line-height: 25px;
      text-transform: uppercase;
    }

    .answers {
      margin-top: 20px;
      @include d-flex-center;
      flex-direction: column;

      &--item:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  .number {
    position: fixed;
    bottom: 0;
    margin-bottom: 10px;
    color: $lighten-o60;
    font-size: 12px;
    line-height: 14px;
  }

  .moon {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

@media (min-width: 767px) {
  .second {
    .content {
      .question {
        padding-top: calc(100vw / 16);
      }

      .answers {
        padding-top: calc(100vw / 32);
      }
    }
    .number {
      margin-bottom: 50px;
    }
  }
}
</style>
