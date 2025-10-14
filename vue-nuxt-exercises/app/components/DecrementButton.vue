<template>
  <button @click="emit('decrement')">Decrementar</button>
</template>

<script setup>
const emit = defineEmits(["decrement"]);
</script>
