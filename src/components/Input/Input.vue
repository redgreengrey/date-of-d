<template>
  <div>
    <p>
      <input
        class="input"
        :class="{ error: errors.length > 0 }"
        type="number"
        :id="id"
        :placeholder="label"
        :value="value"
        :required="required"
        @input="updateValue($event.target.value)"
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
      default: false,
    },
    errors: {
      type: Array,
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

.error {
  border: 1px solid #ee5353;
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
