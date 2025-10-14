<template>
  <TheTitle>Contador:</TheTitle>
  <p>{{ counter }}</p>

  <IncrementButton @increment="counter++" />
  <DecrementButton @decrement="counter--" />
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
</script>
