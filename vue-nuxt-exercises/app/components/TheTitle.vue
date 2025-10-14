<template>
  <p>{{ greeting }}</p>
  <p><slot></slot></p>
</template>
<script setup>
defineProps({
  greeting: String,
});
</script>
