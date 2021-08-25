<template>
  <div class="final">
    <div class="thanks">
      <div class="text">
        <div>Спасибо за Ваши ответы!</div>
        <div class="bold">
          Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.
        </div>
      </div>
      <div class="triangle-down"></div>
    </div>
    <div class="description">
      Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем
      будущем.
    </div>
    <div class="event">
      <div class="tomorrow">
        Первое значимое событие может произойти уже {{ tomorrowDate }},
      </div>
      <div class="ready">
        вам надо быть готовым, что бы последствия не оказались необратимыми.
      </div>
    </div>
    <div class="description m20">
      Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона.
      Прослушайте важную информацию!
    </div>
    <Button
      @click="show"
      text="Позвонить и прослушать"
      background="#4CD964"
      class="btn"
    />
    <div v-if="visible" class="information">
      <div>Вы можете встретить этого человека</div>
      <img src="../assets/luke-skywalker.webp" class="m20" />
      <div>{{ info.name }}</div>
      <div>Он может перевернуть вашу жизнь</div>
    </div>
    <div class="footer">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
      FOLOSIREA LUI
    </div>
  </div>
</template>

<script>
import Button from "../components/Button/Button.vue"
import axios from "axios"

export default {
  name: "Final",
  components: { Button },
  data() {
    return {
      info: null,
      visible: false,
    }
  },
  mounted() {
    axios
      .get("https://swapi.dev/api/people/1/")
      .then((response) => (this.info = response.data))
  },
  methods: {
    show() {
      this.visible = !this.visible
    },
  },
  computed: {
    tomorrowDate() {
      const day = new Date().getDate() + 1
      const month =
        new Date().getMonth() + 1 > 9
          ? new Date().getMonth() + 1
          : "0" + (new Date().getMonth() + 1)
      const year = new Date().getFullYear()

      let result = `${day}.${month}.${year}`

      return result
    },
  },
}
</script>

<style lang="scss" scoped>
.final {
  @include d-flex-center;
  flex-direction: column;

  .thanks {
    @include d-flex-center;
    flex-direction: column;
    margin-top: 25px;

    .text {
      @include d-flex-center;
      flex-direction: column;
      max-width: 259px;
      max-height: 94px;
      border-radius: 5px;
      background-color: #fff;
      color: #202024;
      padding: 5px 15px;
    }

    .bold {
      font-weight: bold;
    }

    .triangle-down {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 13px 7.5px 0 7.5px;
      border-color: #fff transparent transparent transparent;
      margin-left: 200px;
    }
  }

  .description {
    @include d-flex-center;
    flex-direction: column;
    font-size: 14px;
    line-height: 16px;
    width: 220px;
    height: 52px;
    min-height: 75px;
  }

  .m20 {
    margin: 20px 0;
  }

  .event {
    width: 260px;
    height: 170px;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    padding: 15px;
    margin-top: 20px;
    color: $golden;

    .tomorrow {
      font-size: 16px;
      line-height: 25px;
      text-transform: uppercase;
    }
  }

  .btn {
    width: 240px;
    height: 50px;
  }

  .information {
    margin: 20px;
  }

  .footer {
    margin-top: 20px;
    color: #9d9d9d;
    font-size: 7px;
    line-height: 9px;
    text-align: center;
    letter-spacing: 3px;
    max-width: 290px;
  }
}

@media (min-width: 768px) {
  .final {
    height: 100vh;
  }
}
</style>
