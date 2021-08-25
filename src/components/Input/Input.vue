<template>
  <div>
    <p>
      <input
        class="input"
        type="text"
        :id="id"
        :placeholder="label"
        :value="value"
        :required="required"
        v-on:input="updateValue($event.target.value)"
      />
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    updateValue: function(value) {
      this.$emit("input", value)
    },
  },
}
</script>

<style scoped lang="scss">
.input {
  width: 180px;
  height: 40px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 50px;
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
