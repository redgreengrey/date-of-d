<template>
  <div class="v-main-wrapper">
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "v-main-wrapper",
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style scoped>
.v-main-wrapper {
  height: 100vh;
}
</style>
