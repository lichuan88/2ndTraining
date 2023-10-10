import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// unocss 插件
import unocss from "unocss/vite";
// 预设
import { presetUno, presetIcons } from "unocss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss({ presets: [presetUno(), presetIcons()] })],
});
