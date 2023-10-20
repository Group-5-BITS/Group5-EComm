import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./css/index.css";
// import { plugin as VueMeta } from 'vue-meta'


const app = createApp(App);
app.use(createPinia());
// app.use(VueMeta)
app.use(router);
app.mount("#app");

