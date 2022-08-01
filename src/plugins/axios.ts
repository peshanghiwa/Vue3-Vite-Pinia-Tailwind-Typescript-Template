import { ref, Ref } from "vue";
import axios from "axios";
// normally we would have a more advanced configurations, but for this project as we only use get requests, we can just keep it basic
export default axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
