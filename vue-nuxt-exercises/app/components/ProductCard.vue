<template>
  <div class="card">
    <img :src="product.image" :alt="product.title" class="card-image" />
    <div class="card-body">
      <h2>{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <button @click="addToCart">Agregar al carrito</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
}>();

const addToCart = () => {
  alert("Producto agregado al carrito");
};
</script>

<style scoped>
.card {
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.price {
  font-weight: bold;
  margin: 0.75rem 0;
}

button {
  padding: 0.625rem;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
