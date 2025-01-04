<template>
    <input dir="rtl" type="text" v-model="searchQuery" placeholder="جستجو..." class="border border-gray-300 rounded-md p-2 mb-4 w-full" />

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
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    emits: ['itemSelected'],
    data() {
        return {
            searchQuery: '', 
            selectedCategory: 'all'
        }
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                const searchCondition = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                item.description.toLowerCase().includes(this.searchQuery.toLowerCase());
                const categoryCondition = this.selectedCategory === 'all' || item.category === this.selectedCategory;
                return searchCondition && categoryCondition;
            });
        }
    },
    methods : {
        filterItems(category) {
            this.selectedCategory = category;
        },
        selectItem(item) {
            this.$emit('itemSelected', item);
        }
    }
}
</script>
