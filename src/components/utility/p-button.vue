<script setup lang="ts">
const emit = defineEmits(["onClick"]);
defineProps({
  type: {
    type: String,
    default: "primary",
    validator: (value: string) => {
      const validTypes = ["primary", "secondary"];
      const message = "maxPagesShown attribute must be greater than 0.";

      if (!validTypes.includes(value)) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "300px",
  },
  height: {
    type: String,
    default: "60px",
  },
  classes: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <button
    :class="[`btn-${type}`]"
    :disabled="disabled || loading"
    @click="emit('onClick')"
  >
    <p-spinner v-if="loading" size="md" :type="type" />
    <slot v-else></slot>
  </button>
</template>

<style scoped></style>
