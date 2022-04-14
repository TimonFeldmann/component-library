<script setup lang="ts">
import DataTable from "@/components/DataTable.vue";
import InputText from "primevue/inputtext";
import Column from "@/components/Column.vue";

const data = [
  {
    name: "Mustard",
    price: 3,
    userId: "123",
  },
  {
    name: "Ketchup",
    price: 2,
    userId: "456",
  },
];
</script>

<template>
  <div class="component-container">
    <DataTable :value="data" editMode="cell">
      <Column
        field="name"
        header="Item Name"
        :sortable="true"
        style="width: 33%"
      >
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" autofocus />
        </template>
      </Column>
      <Column field="price" header="Price" :sortable="true" style="width: 33%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" autofocus />
        </template>
      </Column>
      <Column
        field="userId"
        header="User Id"
        :sortable="true"
        style="width: 33%"
      >
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" autofocus />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style lang="scss">
@import "primevue/resources/themes/mdc-dark-indigo/theme.css";
@import "primevue/resources/primevue.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.component-container {
  width: 75vw;
  height: 75vh;
}
</style>
