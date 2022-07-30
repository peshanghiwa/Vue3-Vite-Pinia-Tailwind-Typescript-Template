import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router";
import injectUtilities from "./components/utility";
import injectVueSelect from "./plugins/vue-select";

const vueApp = createApp(App);
vueApp.use(router);
injectUtilities(vueApp);
injectVueSelect(vueApp);

vueApp.mount("#app");
