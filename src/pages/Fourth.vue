<template>
  <div class="fourth">
    <div class="header-wrapper">
      <Header :text="text" />
      <img src="../assets/eye-s.svg" alt="eye" class="eye" />
    </div>
    <div class="content">
      <div class="question">
        Снятся ли Вам умершие люди?
      </div>
      <div class="answers">
        <Button @click="setYes" text="Да" class="answers--item" />
        <Button @click="setNo" text="Нет" class="answers--item" />
        <Button @click="setSometimes" text="Иногда" class="answers--item" />
      </div>
    </div>
    <div class="number">Вопрос 4-5</div>
    <img src="../assets/moon.svg" alt="moon" class="moon" />
  </div>
</template>

<script>
import Button from "../components/Button/Button.vue"
import Header from "../components/Header/Header.vue"
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Fourth",
  components: { Button, Header },
  data() {
    return {
      text:
        "Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!",
    }
  },
  methods: {
    ...mapActions([
      "SET_DREAM_WITH_DEAD_YES",
      "SET_DREAM_WITH_DEAD_NO",
      "SET_DREAM_WITH_DEAD_SOMETIMES",
    ]),
    setYes() {
      this.SET_DREAM_WITH_DEAD_YES()
      this.$router.push({ name: "fifth" })
    },
    setNo() {
      this.SET_DREAM_WITH_DEAD_NO()
      this.$router.push({ name: "fifth" })
    },
    setSometimes() {
      this.SET_DREAM_WITH_DEAD_SOMETIMES()
      this.$router.push({ name: "fifth" })
    },
  },
}
</script>

<style lang="scss" scoped>
.fourth {
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
  .fourth {
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

    .moon {
      transform: translateY(150px) scale(1.5);
    }
  }
}
</style>
