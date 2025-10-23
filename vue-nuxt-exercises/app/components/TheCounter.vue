<template>
  <TheTitle>Contador: {{ status }}</TheTitle>

  <p :class="{ counterFinale: counterFinale }">{{ counter }}</p>
  <TheTitle>Contador x2: {{ doubleCounter }} </TheTitle>
  <IncrementButton v-if="counter <= 9" @increment="increment" />
  <DecrementButton v-if="counter >= 1" @decrement="decrement" />
</template>

<script setup>
import { counter } from "../stores/counter";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();

const { counter, status, counterFinale, doubleCounter } =
  storeToRefs(counterStore);
const { increment, decrement } = counterStore;
</script>

<style scoped>
.counterFinale {
  color: green;
}
</style>
