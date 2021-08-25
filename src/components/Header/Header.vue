<template>
  <div class="header">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  @include d-flex-center;
  font-family: "Bad Script", Roboto, sans-serif;
  color: $lighten-o60;
  padding: 20px 0;
  max-width: 235px;
}
</style>
