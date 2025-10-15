<template>
  <button @click="emit('event')">Notificar</button>
  <p>{{ message }}</p>
</template>

<script setup>
const emit = defineEmits(["event"]);
const message = inject("message");
</script>
