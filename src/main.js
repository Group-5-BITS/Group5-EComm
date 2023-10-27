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
      domain: 'group5-devops.us.auth0.com',
      client_id: '00eFFR9Cqp3m8jopkGJVdvfrDaHJeOWa',
      redirect_uri: 'https://13.50.62.21:5173/callback',
    }),
  );
app.mount("#app");

