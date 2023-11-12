/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDatePicker } from 'vuetify/labs/VDatePicker'
// Composables
import { createVuetify, ThemeDefinition } from 'vuetify'

const customLightTheme: ThemeDefinition = {
  dark: false,
  variables: {
    'border-color': '#e5eaef'
  },
  colors: {
    primary: '#2196f3',
    secondary: '#03c9d7',
    info: '#539BFF',
    success: '#05b187',
    accent: '#FFAB91',
    warning: '#fec90f',
    error: '#fb9678',
    lightprimary: '#e5fafb',
    lightsecondary: '#EFF9FF',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#f6f6f6',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4'
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDatePicker,
  },
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme,
    },
  },
})
