/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import { setupCalendar } from 'v-calendar';
import Vue3ColorPicker from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(setupCalendar,{})
    .use(Vue3ColorPicker)
}
