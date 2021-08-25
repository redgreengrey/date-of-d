<template>
  <div class="fifth">
    <div class="header-wrapper">
      <Header :text="header" />
      <img src="../assets/eye-s.svg" alt="eye" class="eye" />
    </div>
    <div class="content">
      <div class="question">
        Запись, которую Вы услышите, может шокировать людей с неокрепшей
        психикой. Вы готовы узнать, что ждет именно Вас?
      </div>
      <div class="answers">
        <Button @click="setYes" text="Да" class="answers--item" />
        <Button
          @click="setDontKnow"
          text="Затрудняюсь ответить"
          class="answers--item"
        />
      </div>
    </div>
    <div class="number">Вопрос 5-5</div>
    <img src="../assets/moon.svg" alt="moon" class="moon" />
  </div>
</template>

<script>
import Button from "../components/Button/Button.vue"
import Header from "../components/Header/Header.vue"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Fifth",
  components: { Button, Header },
  methods: {
    ...mapActions(["SET_LISTEN_YES", "SET_LISTEN_DONT_KNOW"]),
    setYes() {
      this.SET_LISTEN_YES()
      this.$router.push({ name: "record" })
    },
    setDontKnow() {
      this.SET_LISTEN_DONT_KNOW()
      this.$router.push({ name: "record" })
    },
  },
  computed: {
    ...mapGetters(["personAge"]),
    header() {
      if (this.personAge > 17 && this.personAge < 35) {
        return "По вам скучает очень близкий человек, которого больше нет в мире живых."
      }
      if (this.personAge > 35 && this.personAge < 46) {
        return "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка."
      }
      return "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей."
    },
  },
}
</script>

<style lang="scss" scoped>
.fifth {
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

      &--item {
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
  .fifth {
    .content {
      .question {
        padding-top: calc(100vw / 16);
        max-width: calc(100vw / 3);
      }

      .answers {
        padding-top: calc(100vw / 32);
      }
    }
    .number {
      margin-bottom: 50px;
    }

    .moon {
      transform: translateY(150px) scale(1.5);
    }
  }
}
</style>
