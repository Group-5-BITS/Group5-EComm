import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import {createRouter} from "./router";
import "./css/index.css";
import { createAuth0 } from '@auth0/auth0-vue';
// import { plugin as VueMeta } from 'vue-meta'


const app = createApp(App);
app.use(createPinia());
// app.use(VueMeta)
app.use(createRouter(App));
app.use(
    createAuth0({
      domain: 'group5-devops.us.auth0.com',
      clientId: '00eFFR9Cqp3m8jopkGJVdvfrDaHJeOWa',
      authorizationParams: {
        redirect_uri: window.location.origin,
      }
    }),
  );
app.mount("#app");

