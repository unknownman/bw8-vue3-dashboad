import { defineStore } from 'pinia'

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        isLoggedIn: false,
    }),
    getters: {
        userName: (state) => state.user?.name || "Guest"
    },
    actions: {
        login(user) {
            this.user = user
            this.isLoggedIn = true
        },
        logout() {
            this.user = null
            this.isLoggedIn = false
        }
    }
})