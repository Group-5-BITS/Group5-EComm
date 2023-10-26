<template>
  <NavBar />
  <div class="flex-row py-6">
    <MainPage v-if="state" @search="searching"/>
  </div>

</template>
<script>
import MainPage from "../components/MainPage.vue";
import NavBar from "../components/NavBar.vue";
import axios from "redaxios";
import { useCatalogStore } from "../utils/store.js";

export default {
  name: "App",
  components: {
    NavBar,
    MainPage
  },
  data: () => ({
    state: true,
    searchText: "",
    messageId: ""
  }),
  setup() {
    const store = useCatalogStore();
    return { store };
  },
  methods: {
    async searching(name, id, min, max) {
      console.log(name, id);
      if (typeof name !== "object") {
        console.log("This function was called " + name);
        this.searchText = name;
        let data = {};
        if (id === 0) {
          data = {
            ...(name && { name })
          };
        } else if (id === 1) {
          data = {
            provider_name: name
          };
        } else {
          data = { minimum_value: min, maximum_value: max };
        }
        let res = await axios.post(
          `${this.store.BAP_URI}/api/get-catalog`,
          data, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
          }  );
        console.log({ res: res }, res.data.message_id);
        this.store.$patch({ messageId: res.data.message_id, catalog: [], searchText: this.searchText });
        await this.store.updateCatalog();
        // this.messageId = res.data.message_id;
        //});
        this.$router.push({ name: "product" });
      }
      // this.state = !this.state;
    }
  }
};
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
