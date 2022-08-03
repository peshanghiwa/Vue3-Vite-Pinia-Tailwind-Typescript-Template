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
});
</script>

<template>
  <button
    :class="['btn', `btn-${type}`]"
    :disabled="disabled || loading"
    @click="emit('onClick')"
  >
    <p-spinner
      class="loading-component"
      v-if="loading"
      size="md"
      :type="type"
    />
    <slot v-else />
  </button>
</template>

<style scoped></style>
