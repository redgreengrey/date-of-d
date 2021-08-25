<template>
  <div class="third">
    <div class="header-wrapper">
      <Header :text="text" />
      <img src="../assets/eye-s.svg" alt="eye" class="eye" />
    </div>
    <div class="content">
      <div class="question">
        укажите свою дату рождения
      </div>
      <div class="answers">
        <div class="answers--item">
          <Input
            v-model="day"
            label="День"
            :required="true"
            :errors="dayError"
          />
        </div>
        <div class="answers--item">
          <Input
            v-model="month"
            label="Месяц"
            :required="true"
            :errors="monthError"
          />
        </div>
        <div class="answers--item">
          <Input
            v-model="year"
            label="Год"
            :required="true"
            :errors="yearError"
          />
        </div>
        <Button @click="check" text="Далее" />
      </div>
    </div>
    <div class="number">Вопрос 3-5</div>
    <img src="../assets/moon.svg" alt="moon" class="moon" />
  </div>
</template>

<script>
import Button from "../components/Button/Button.vue"
import Header from "../components/Header/Header.vue"
import Input from "../components/Input/Input.vue"

export default {
  components: { Button, Header, Input },
  name: "Third",
  data() {
    return {
      text: "Уже совсем скоро Вы узнаете много интересного о своем будущем!",
      day: "",
      month: "",
      year: "",
      dayError: [],
      monthError: [],
      yearError: [],
    }
  },
  methods: {
    setAge() {
      const today = new Date()
      const birthDate = new Date(`${this.year}/${this.month}/${this.day}`)
      let age = today.getFullYear() - birthDate.getFullYear()
      let m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }

      this.$store.commit("SET_AGE", age)

      this.day = ""
      this.month = ""
      this.year = ""

      this.$router.push({ name: "loading" })
    },

    setDay(e) {
      this.day = e.target.value
    },
    setMonth(e) {
      this.month = e.target.value
    },
    setYear(e) {
      this.year = e.target.value
    },
    check: function(e) {
      if (
        this.day.length > 0 &&
        this.month.length > 0 &&
        this.year.length > 0
      ) {
        this.setAge()
      }

      this.errors = []

      if (!this.day) {
        this.dayError.push("день")
      }
      if (!this.month) {
        this.monthError.push("месяц")
      }
      if (!this.year) {
        this.yearError.push("год")
      }
    },
  },
}
</script>

<style scoped lang="scss">
.third {
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
  .third {
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
