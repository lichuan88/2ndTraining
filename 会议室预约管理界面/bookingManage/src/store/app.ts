// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
    const access_token = ref<string | null>()
    return { access_token }
})
