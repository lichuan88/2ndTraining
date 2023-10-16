import { createApp } from "vue";
import "uno.css";
import "./assets/scss/global.scss";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/src/message-box.scss";
import "element-plus/theme-chalk/src/message.scss";
import router from "./router";
import App from "./App.vue";
createApp(App).use(router).mount("#app");
