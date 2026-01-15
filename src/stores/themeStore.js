import { defineStore } from 'pinia'

export const useThemeStore = defineStore("theme", {
    state: () => ({
        currentTheme: "light"
    }),
    getters: {
        isDarkTheme: (state) => state.currentTheme === "dark",
        themeClass: (state) => state.currentTheme === "dark" ? "dark" : "",
        isLightTheme: (state) => state.currentTheme === "light"
    },
    actions: {
        toggleTheme() {
            this.currentTheme = this.currentTheme === "light" ? "dark" : "light"
        }
    }
})
