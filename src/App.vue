<script setup>
import ProductItem from "./components/ProductItem.vue";
</script>

<template>
  <RouterView>
    <div class="container">
      <ProductItem />
    </div>
  </RouterView>
</template>

<style scoped>
.container {
  position: relative;
  padding: 0;
}
</style>
