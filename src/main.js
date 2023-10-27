import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./css/index.css";
import { createAuth0 } from '@auth0/auth0-vue';
// import { plugin as VueMeta } from 'vue-meta'


const app = createApp(App);
app.use(createPinia());
// app.use(VueMeta)
app.use(router);
app.use(
    createAuth0({
      domain: 'dev-v8v2au3mfnnro6js.us.auth0.com',
      client_id: 'S9BCegL7uWUcbNzeDZUtoPV5hSVVMjYu',
      redirect_uri: window.location.origin,
    }),
  );
app.mount("#app");

