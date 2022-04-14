<script setup lang="ts">
import Column from "primevue/column";
</script>

<template>
  <Column v-bind="$attrs">
    <slot
      v-if="$slots"
      v-for="slot in Object.keys($slots)"
      :name="slot"
      :slot="slot"
    ></slot>
  </Column>
</template>

<style lang="scss"></style>
