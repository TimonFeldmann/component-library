import { defineCustomElement } from "vue";

import "primevue/resources/themes/mdc-dark-indigo/theme.css";
import "primevue/resources/primevue.min.css";

import DataTable from "@/components/DataTable.vue";
import Column from "@/components/Column.vue";

const ExampleElement = defineCustomElement(DataTable);

customElements.define("my-example", ExampleElement);

export { DataTable, Column };
