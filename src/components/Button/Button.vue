<template>
  <button
    @click="$emit('click')"
    class="button"
    :style="'background: ' + background"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    background: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
}
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
  height: 40px;
  width: 180px;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    rgba(246, 200, 102, 0.9) -6.2%,
    rgba(254, 173, 53, 0.9) 100%
  );
  color: $lighten;
  font-size: 14px;
  line-height: 16.41px;
}

button:disabled {
  opacity: 0.4;
}
</style>
