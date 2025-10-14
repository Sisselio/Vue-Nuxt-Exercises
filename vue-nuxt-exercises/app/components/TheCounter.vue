<template>
  <TheTitle>Contador:</TheTitle>
  <p>{{ counter }}</p>

  <IncrementButton v-if="counter <= 9" @increment="counter++" />
  <DecrementButton v-if="counter >= 1" @decrement="counter--" />
</template>

<script setup>
import { ref } from "vue";

const counter = ref(5);
</script>
