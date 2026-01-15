<script setup>
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
const authStore = useAuthStore()
const themeStore = useThemeStore()
</script>
<template>
    <header class="bg-blue-600 text-white p-4 shadow-md ">
        <div class="flex justify-between items-center max-w-6xl mx-auto">
            <h1 class="text-3xl font-extrabold tracking-wide text-center select-none">
                فروشگاه دیجیتال
            </h1>
            <button @click="themeStore.toggleTheme" class="text-white text-sm px-4 py-2 rounded-lg shadow
                               transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400">
                تغییر تم
            </button>

            <div class="flex items-center gap-4">
                <div v-if="authStore.isLoggedIn" class="flex items-center gap-3">
                    <span class="text-sm font-medium">
                        خوش آمدید،
                        <span class="font-bold">{{ authStore.userName }}</span>
                    </span>
                    <button
                        @click="authStore.logout"
                        class="bg-red-600 hover:bg-red-700 active:bg-red-800
                               text-white text-sm px-4 py-2 rounded-lg shadow
                               transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                        خروج
                    </button>
                </div>

                <div v-else>
                    <button
                        @click="authStore.login({ name: 'Ali Joder' })"
                        class="bg-green-600 hover:bg-green-700 active:bg-green-800
                               text-white text-sm px-5 py-2 rounded-lg shadow
                               transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        ورود
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>