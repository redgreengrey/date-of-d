<template>
  <div class="main">
    <div class="main__header">Лучшие астрологи и экстрасенсы Румынии</div>
    <div class="main__content">
      <div class="main__content--accuracy">Точность прогноза: 97%</div>
      <div class="main__content--prey">
        <img class="woman" src="../assets/woman1.png" alt="prey" />
      </div>
      <div class="main__content--first-question">
        <div>Вас беспокоит вопрос о том,</div>
        <div class="uppercase">когда Вы покинете этот Мир и</div>
        <div class="uppercase">при каких обстоятельствах?</div>
        <Button @click="setYes" text="Да" class="choose-btn" />
        <Button @click="setNo" text="Нет" class="choose-btn" />
        <div class="footer">Онлайн предсказание</div>
      </div>
      <div class="main__content--insight">
        <div>Позвольте нам раскрыть</div>
        <div>эту волнующую тайну и</div>
        <div class="highlight">
          <div>
            с точностью
          </div>
          <div>определить дату и</div>
          <div>время вашей смерти,</div>
        </div>
        <div>а также предшествующую</div>
        <div>этому событию причину</div>
        <img class="hands" src="../assets/hands.png" alt="" />
      </div>
      <div class="main__content--yoga">
        <div>Многие не верят</div>
        <div>предсказаниям и мы</div>
        <div>решили доказать каждому,</div>
        <div class="highlight">что прогноз может</div>
        <div class="highlight">изменить жизнь</div>
        <div class="highlight">любого человека!</div>
      </div>
      <div class="main__content--afraid">
        <div class="text uppercase">Боитесь ли вы умереть?</div>
        <Button @click="setYes" text="Да" class="choose-btn" />
        <Button @click="setNo" text="Нет" class="choose-btn" />
        <div class="question-number">Вопрос 1 - 5</div>
      </div>
      <div class="main__content--footer">
        <div class="info">
          <img src="../assets/eye.svg" alt="eye" class="eye" />
          <img src="../assets/moon.svg" alt="eye" class="moon" />
          <img class="rune" src="../assets/rune1.svg" />
          <div class="thought">
            <div>Вы, конечно, умрете.</div>
            <div>И все, с кем вы знакомы,</div>
            <div>тоже однажды умрут.</div>
          </div>
          <img class="rune" src="../assets/rune2.svg" />
        </div>
        <div class="text">
          <div class="text--item">
            TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU
          </div>
          <div class="text--item">
            DE DIVERTISMENT. PRIN FOLOSIREA LUI
          </div>
          <div class="text--item">
            DECLARATI CA AVETI 18 ANI IMPLINITI
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button/Button.vue"
import { mapActions } from "vuex"

export default {
  name: "Main",
  components: {
    Button,
  },
  methods: {
    ...mapActions(["SET_YES_FEAR", "SET_NO_FEAR"]),
    setYes() {
      this.SET_YES_FEAR()
      this.$router.push({ name: "second" })
    },
    setNo() {
      this.SET_NO_FEAR()
      this.$router.push({ name: "second" })
    },
  },
}
</script>

<style scoped lang="scss">
.main {
  @include d-flex-center;
  flex-direction: column;
  background: url("../assets/blik-svg.svg") no-repeat;
  background-size: 100%;
  background-position: 50% 0%;

  &__header {
    width: 100%;
    font-size: 12px;
    color: $lighten-o60;
    border-bottom: 1px solid #ffffff60;
    padding: 10px;
  }

  &__content {
    @include d-flex-center;
    flex-direction: column;
    width: 100%;

    &--accuracy {
      color: $lighten-o60;
      padding: 10px;
      font-size: 20px;
    }

    &--prey {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 10px;
    }

    &--first-question {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $golden;
      font-size: 16px;
      line-height: 25px;

      .choose-btn {
        margin-top: 20px;
      }

      .footer {
        font-size: 12px;
        color: $lighten-o60;
        margin-top: 20px;
      }
    }

    &--insight {
      border: 1px solid #fff;
      padding: 60px 20px 30px 20px;
      margin-top: 60px;
      position: relative;
      font-size: $font-size-16;
      line-height: 25px;

      .hands {
        position: absolute;
        top: -40px;
        left: 82px;
        width: 78px;
      }
    }

    &--yoga {
      @include d-flex-center;
      flex-direction: column;
      margin-top: 40px;
      margin-bottom: 40px;
      width: 100%;
      height: calc(100vw / 1.5);
      padding: 100px 50px;
      font-size: $font-size-16;
      line-height: 25px;
      position: relative;
      background-image: url("../assets/image 7.png");
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    &--afraid {
      @include d-flex-center;
      flex-direction: column;
      padding: 30px 50px 50px 50px;

      .text {
        color: $golden;
        font-size: $font-size-20;
        margin-bottom: 30px;
      }

      .choose-btn {
        margin-top: 20px;
      }

      .question-number {
        margin-top: 20px;
        color: $lighten-o60;
      }
    }

    &--footer {
      width: 100%;

      .info {
        position: relative;

        .rune {
          margin: 30px 0;
        }

        .thought {
          font-family: "Bad Script", serif;
        }

        .eye {
          position: absolute;
          right: 0px;
          transform: translate(28px);
        }

        .moon {
          position: absolute;
          left: 0px;
          transform: rotate(189deg) translate(10px, -100px);
        }
      }

      .text {
        margin-top: 50px;

        &--item {
          width: 100%;
          height: 10px;
          color: #9d9d9d;
          font-size: 8px;
          line-height: 9px;
          letter-spacing: 3px;
        }
      }
    }
  }
}

.highlight {
  color: $golden;
  font-size: $font-size-20;
}

.uppercase {
  text-transform: uppercase;
}

@media (min-width: 767px) {
  .main {
    font-size: 25px;

    .main__content {
      &--footer {
        .text {
          display: none;
        }

        .eye {
          transform: none;
          width: 300px;
          height: 150px;
        }

        .moon {
          transform: translate(-60px, 140px);
          width: 300px;
          height: 150px;
        }
      }

      &--afraid {
        .question-number {
          font-size: 16px;
        }
      }
    }
  }
}

@media (min-width: 1900px) {
  .main__content {
    &--yoga {
      background-image: url("../assets/image 7-XL.png");
    }

    &--afraid {
      .question-number {
        font-size: 16px;
      }
    }
  }
}
</style>
