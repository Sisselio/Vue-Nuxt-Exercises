<template>
  <TheTitle>Contador:</TheTitle>
  <p>{{ counter }}</p>

  <IncrementButton v-if="counter <= 9" @increment="increment" />
  <DecrementButton v-if="counter >= 1" @decrement="decrement" />
</template>

<script setup>
const { counter, increment, decrement } = useCounter();
</script>
