<template>
  <p>{{ message }}</p>
  <div>
    <button @click="onCick">روی من بزن</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const message = ref("سلام بر جهان");
function onCick() {
  message.value = "خداحافظ ";
}
</script>
<style>
p {
  @apply bg-red-100 p-10 font-bold text-3xl text-red-500;
}
button {
  @apply bg-blue-100 p-10 font-bold text-3xl text-blue-500;
}
</style>
