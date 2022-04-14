import { createApp } from "vue";

// @ts-ignore
import App from "@/App.vue";

import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(PrimeVue);

app.mount("#app");
