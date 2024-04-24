import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";


import { ref, reactive, computed } from "vue";

window.ref = ref;
window.reactive = reactive;
window.computed = computed;

import DefaultLayout from "@/Components/Layouts/Default.vue";
import GuestLayout from "@/Components/Layouts/Guest.vue";
import EmptyLayout from "@/Components/Layouts/Empty.vue";

createApp(App)
    .component("layout-default", DefaultLayout)
    .component("layout-guest", GuestLayout)
    .component("layout-empty", EmptyLayout)
    .use(router)
    .mount("#app");
