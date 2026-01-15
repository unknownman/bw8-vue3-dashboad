<template>
    <input dir="rtl" type="text" 
        v-model="searchQuery" placeholder="جستجو..." 
        class="border border-gray-300 rounded-md p-2 mb-4 w-full" />

    <div dir="rtl" class="flex justify-center mb-4">
        <button :class="['bg-gray-200 text-gray-700 m-2 rounded-md p-2', { 'bg-blue-500 text-white': selectedCategory === 'all' }]" @click="filterItems('all')">همه</button>
        <button :class="['bg-gray-200 text-gray-700 m-2 rounded-md p-2', { 'bg-blue-500 text-white': selectedCategory === 'laptop' }]" @click="filterItems('laptop')">لپ‌تاپ</button>
        <button :class="['bg-gray-200 text-gray-700 m-2 rounded-md p-2', { 'bg-blue-500 text-white': selectedCategory === 'mobile' }]" @click="filterItems('mobile')">موبایل</button>
        <button :class="['bg-gray-200 text-gray-700 m-2 rounded-md p-2', { 'bg-blue-500 text-white': selectedCategory === 'headphone' }]" @click="filterItems('headphone')">هدفون</button>
        <button :class="['bg-gray-200 text-gray-700 m-2 rounded-md p-2', { 'bg-blue-500 text-white': selectedCategory === 'monitor' }]" @click="filterItems('monitor')">مانیتور</button>
    </div>

    <ul dir="rtl" class="list-none p-0">
        <li v-for="item in filteredItems" :key="item.id" @click="selectItem(item)" class="border-b border-gray-300 p-4 cursor-pointer hover:bg-gray-100">
            <strong>{{ item.name }}</strong> - {{ item.description }} - قیمت: {{ item.price }} - موجودی: {{ item.avaliability ? 'موجود' : 'ناموجود' }}
        </li>
    </ul>
</template>
<script setup>
import {ref , computed, watchEffect, defineProps , defineEmits } from "vue";

const emit = defineEmits(['itemSelected']);

function selectItem(item) {
    emit('itemSelected', item);
}

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => []
    }
})


const searchQuery = ref('');
const selectedCategory = ref('all');
const debounce = (func , delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const filteredItems = ref([])
watchEffect(() => {
    filteredItems.value = props.items.filter(item => {
        const searchCondition = item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.value.toLowerCase());
        const categoryCondition = selectedCategory.value === 'all' || item.category === selectedCategory.value;
        return searchCondition && categoryCondition;
    });
})
const filterItems = (category) => {
    selectedCategory.value = category;
};


</script>
