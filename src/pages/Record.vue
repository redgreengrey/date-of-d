<template>
  <div class="record">
    <img src="../assets/microphone.svg" alt="mic" />
    <div class="progress-bar">
      <progress-bar :options="options" :value="value" />
    </div>
    <div class="percent">{{ value }}%</div>
    <div class="text">запись сообщения</div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data: () => {
    return {
      value: 0,
      options: {
        text: {
          color: "#FFFFFF",
          shadowEnable: true,
          shadowColor: "#000000",
          fontSize: 14,
          fontFamily: "Helvetica",
          dynamicPosition: false,
          hideText: true,
        },
        progress: {
          color: "#F6C866",
          backgroundColor: "#333333",
          inverted: false,
        },
        layout: {
          height: 4,
          width: 260,
          verticalTextAlign: 61,
          horizontalTextAlign: 43,
          zeroOffset: 0,
          strokeWidth: 30,
          progressPadding: 0,
          type: "line",
        },
      },
    }
  },
  mounted() {
    this.interval = setInterval(this.record, 200)
  },
  methods: {
    record() {
      if (this.value !== 100) {
        this.value += 1
      }
      if (this.value >= 100) {
        clearInterval(this.interval)
        this.$router.push({ name: "final" })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.record {
  @include d-flex-center;
  flex-direction: column;
  height: 100vh;

  .progress-bar {
    margin-top: 20px;
    margin-right: 260px;
  }

  .text,
  .percent {
    margin-top: 20px;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.6);
  }
}
</style>
