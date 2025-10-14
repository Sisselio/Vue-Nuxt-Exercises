<template>
  <button @click="emit('event')">Notificar</button>
</template>

<script setup>
const emit = defineEmits(["event"]);
</script>
