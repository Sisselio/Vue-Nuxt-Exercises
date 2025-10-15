import { ChildComponent } from '../../.nuxt/components';
<template>
  <slot></slot>
</template>
<script setup>
const message = "Hola mundo";
provide("message", message);
</script>
