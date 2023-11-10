import { createApp } from "vue";
import "uno.css";
import App from "./App.vue";
import "./assets/scss/global.scss";
import "element-plus/theme-chalk/el-message.css";
import router from "./router";
import "element-plus/theme-chalk/src/message-box.scss";
import "element-plus/theme-chalk/src/message.scss";
createApp(App).use(router).mount("#app");
