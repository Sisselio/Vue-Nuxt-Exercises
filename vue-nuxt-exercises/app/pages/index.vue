<template>
  <div class="page">
    <h1>Catálogo de productos</h1>

    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
  <TheCounter></TheCounter>
  <ParentComponent>
    <ChildComponent></ChildComponent>
  </ParentComponent>
</template>

<script setup lang="ts">
// import ProductCard from "~/components/ProductCard.vue";
import { products } from "~/data/mock";
</script>

<style scoped>
.page {
  padding: 24px;
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-bottom: 32px;
}

button {
  padding: 10px 20px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
