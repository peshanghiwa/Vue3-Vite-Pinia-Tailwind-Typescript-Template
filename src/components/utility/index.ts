import { App } from "vue";
import pButton from "./p-button.vue";

export default (vueApp: App<Element>) => {
  vueApp.component("p-button", pButton);

  return vueApp;
};
