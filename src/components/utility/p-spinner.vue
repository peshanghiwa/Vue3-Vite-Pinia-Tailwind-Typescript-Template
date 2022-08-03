<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
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
  size: {
    type: String,
    default: "md",
    validator: (value: string) => {
      const validTypes = ["sm", "md", "lg"];
      const message = "maxPagesShown attribute must be greater than 0.";

      if (!validTypes.includes(value)) {
        console.error(message);
        throw new TypeError(message);
      }
      return true;
    },
  },
});
</script>

<template>
  <div role="status">
    <div
      style="border-top-color: transparent"
      :class="['spinner', `spinner-${size}`, `spinner-${type}`]"
    />
    <span class="sr-only">Loading...</span>
  </div>
</template>

<style scoped></style>
