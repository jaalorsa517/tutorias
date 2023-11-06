import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { HTTPSERVICE } from "src/models/inject.models";
import { HttpService } from "src/services/http.services";

const httpService = new HttpService();

const app = createApp(App);
app.provide(HTTPSERVICE, httpService);
app.mount("#app");
