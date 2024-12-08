<template>
  <div class="container mt-10 mx-auto bg-gradient-to-br p-10 rounded-2xl from-slate-50/80 shadow-2xl  to-slate-100/30 via-purple-100/20" dir="rtl">
    <h1 class="text-3xl text-blue-700 pb-5 font-bold">کامپوننت Button</h1>
    <pre class="text-sm text-slate-500  py-5 shadow-2xl bg-yellow-100/70 -mx-10 text-center" dir="ltr">{{  `<Button lg|xl|sm shadow primary|warning|danger|success outline label='custom label' loading rounded />` }}</pre>

    <div class="grid grid-cols-5 gap-8 mx-auto mt-10">
      <Button lg label="دکمه نمونه"></Button>
      <Button xl label="دکمه نمونه"></Button>
      <Button sm label="دکمه نمونه"></Button>
      <Button primary lg label="دکمه نمونه"></Button>
      <Button primary xl label="دکمه نمونه"></Button>
      <Button primary sm label="دکمه نمونه"></Button>
      <Button warning shadow lg label="دکمه نمونه"></Button>
      <Button warning shadow xl label="دکمه نمونه"></Button>
      <Button warning shadow sm label="دکمه نمونه"></Button>
      <Button lg label="دکمه نمونه"></Button>
      <Button rounded outline label="دکمه نمونه"></Button>
      <Button rounded shadow lg label="دکمه نمونه"></Button>
      <Button rounded shadow lg label="دکمه نمونه"></Button>
      <Button rounded shadow xl label="دکمه نمونه"></Button>
      <Button rounded shadow sm label="دکمه نمونه"></Button>
      <Button rounded shadow primary sm label="دکمه نمونه"></Button>
      <Button rounded shadow warning sm label="دکمه نمونه"></Button>
      <Button rounded shadow danger sm label="دکمه نمونه"></Button>
      <Button rounded shadow success sm loading label="دکمه نمونه"></Button>
      <Button outline rounded primary sm label="دکمه نمونه"></Button>
      <Button rounded outline warning sm label="دکمه نمونه"></Button>
      <Button rounded outline danger sm label="دکمه نمونه"></Button>
      <Button rounded outline success sm loading label="دکمه نمونه"></Button>
      <Button outline rounded shadow primary sm label="دکمه نمونه"></Button>
      <Button rounded shadow outline warning sm label="دکمه نمونه"></Button>
      <Button rounded shadow outline danger sm label="دکمه نمونه"></Button>
      <Button
        rounded
        shadow
        outline
        success
        sm
        loading
        label="دکمه نمونه"
      ></Button>
    </div>
  </div>
</template>
<script setup>
import Button from '@/components/Button.vue';
</script>
