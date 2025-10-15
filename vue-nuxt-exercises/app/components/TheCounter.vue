<template>
  <TheTitle>Contador:</TheTitle>
  <p :class="{ counterFinale: counterFinale }">{{ counter }}</p>

  <IncrementButton v-if="counter <= 9" @increment="increment" />
  <DecrementButton v-if="counter >= 1" @decrement="decrement" />
</template>

<script setup>
import { computed } from "vue";
import { useCounter } from "../composables/useCounter";

const { counter, increment, decrement } = useCounter();

const counterFinale = computed(() => counter.value === 10);
</script>

<style scoped>
.counterFinale {
  color: green;
}
</style>
