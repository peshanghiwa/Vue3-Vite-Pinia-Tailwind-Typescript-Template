import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import injectUtilities from "./components/utility";

const vueApp = createApp(App);
injectUtilities(vueApp);

vueApp.mount("#app");
