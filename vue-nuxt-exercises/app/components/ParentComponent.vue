import { ChildComponent } from '../../.nuxt/components';
<template>
  <ChildComponent @event="notify()"></ChildComponent>
</template>
<script setup>
function notify() {
  console.log("hola");
}
</script>
