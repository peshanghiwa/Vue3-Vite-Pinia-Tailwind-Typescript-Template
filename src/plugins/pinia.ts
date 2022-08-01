import { App } from "vue";
import { createPinia } from "pinia";
const pinia = createPinia();

export default (vueApp: App<Element>) => {
  vueApp.use(pinia);
};
