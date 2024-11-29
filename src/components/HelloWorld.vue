<template>
  <p>{{ message }}</p>
  <div>
    <button @click="onCick">روی من بزن</button>
  </div>
</template>
<script setup>
import { ref } from "vue"
const message = ref("سلام بر جهان");
function onCick () {
  message.value = "خداحافظ "
}
</script>
