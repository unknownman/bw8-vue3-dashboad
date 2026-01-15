<template>
  <div>
    <p>شمارنده : {{ count }}</p>
    <Button @click="increment">اضافه کن</Button>
  </div>
</template>
<script setup>
import {ref} from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
</script>