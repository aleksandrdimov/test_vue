<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    selectedNum() {
      this.$emit("selectedNum", { pageSize: this.selected });
    },
  },
};
</script>

<template>
  <div class="sort-products__num">
    <b>Товару на сторінці </b>
    <select v-model="selected" @change="selectedNum">
      <option value="" disabled>вибрати</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>

<style></style>
