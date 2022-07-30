import { App } from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default (vueApp: App<Element>) => {
  vueApp.component("v-select", vSelect);
};
