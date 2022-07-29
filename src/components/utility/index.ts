import { App } from "vue";
import pSpinner from "./p-spinner.vue";
import pButton from "./p-button.vue";

export default (vueApp: App<Element>) => {
  vueApp.component("p-spinner", pSpinner);
  vueApp.component("p-button", pButton);

  return vueApp;
};
