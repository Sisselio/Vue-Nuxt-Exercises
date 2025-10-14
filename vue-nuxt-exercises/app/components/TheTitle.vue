<template>
  <p>{{ greeting }}</p>
</template>
<script setup>
defineProps({
  greeting: String,
});
</script>
