import "./style.css";
import App from "./App.ce.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import { vueDefineCustomElement } from "./shared/createCustomeElement";

const pinia = createPinia();
const plugins = [router, pinia];
const app = vueDefineCustomElement(App, { plugins });

customElements.define("wc-animals", app);
