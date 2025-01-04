<template>
  <div class="container mx-auto pt-10">
  <ItemList  :items="productList" @itemSelected="handleItemSelected" class="item-list-container"  />
  <div v-if="selectedItem" id="selected-item-container" class="selected-item-container">
    <h3>آیتم انتخاب شده:</h3>
    <p>نام: {{selectedItem.name}}</p>
    <p>توضیحات: {{selectedItem.description}}</p>  
  </div>
</div>
</template>

<script setup>
const selectedItem = ref(null);
function handleItemSelected(item) {
  selectedItem.value = item;
}

const productList = ref([
  {
    id: 1,
    name: 'لپ‌تاپ ایسوس',
    description: 'لپ‌تاپ ایسوس مدل X507UB',
    price: 12500000,
    category: 'laptop',
    availability: true
  },
  {
    id: 2,
    name: 'موبایل شیائومی',
    description: 'موبایل شیائومی مدل Redmi Note 8',
    price: 4500000,
    category: 'mobile',
    availability: false
  },
  {
    id: 3,
    name: 'هدفون سونی',
    description: 'هدفون بی‌سیم سونی مدل WH-CH510',
    price: 1200000,
    category: 'headphone',
    availability: true
  },
  {
    id: 4,
    name: 'مانیتور ایسر',
    description: 'مانیتور ایسر مدل KG241Q',
    price: 2900000,
    category: 'monitor',
    availability: true
  }
]);
import { ref } from 'vue';
import ItemList from './components/ItemList.vue'

</script>

<style>
.item-list-container {
  @apply p-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl shadow-lg;
  direction: rtl;
  border: 1px solid #e2e8f0;
}

.selected-item-container {
  @apply mt-6 p-6 bg-white rounded-xl shadow-lg;
  border: 1px solid #e2e8f0;
}

.selected-item-container h3 {
  @apply text-xl font-bold mb-4 text-blue-700;
  direction: rtl;
}

.selected-item-container p {
  @apply text-gray-800 leading-relaxed;
  direction: rtl;
}

p::first-child {
  @apply font-bold;
}
</style>