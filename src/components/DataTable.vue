<script setup lang="ts">
import DataTable from "primevue/datatable";
</script>

<template>
  <DataTable v-bind="$attrs">
    <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot"></slot>
  </DataTable>
</template>

<style lang="scss">
.my-custom-style {
  background-color: red;
}

.p-datatable .p-sortable-column:not(.p-highlight):hover,
.p-datatable .p-sortable-column:focus,
.p-highlight:hover {
  background: #363636 !important;
}
</style>
