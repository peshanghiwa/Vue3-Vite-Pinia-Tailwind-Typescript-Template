import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import injectUtilities from "./components/utility";
import injectVueSelect from "./plugins/vue-select";

const vueApp = createApp(App);
injectUtilities(vueApp);
injectVueSelect(vueApp);

vueApp.mount("#app");
