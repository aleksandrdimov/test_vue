<script>
import axios from "axios";
import Pagination from "./Pagination.vue";
import SortProducts from "./SortProducts.vue";
import InfoItem from "./InfoItem.vue";

export default {
  name: "poducts",
  data: () => ({
    totalItems: "",
    pageSize: 5,
    pageNum: 1,
    products: [],
    errors: [],
    isNull: "Незазначено",
    selected: "",
    isShow: false,
    infoItem: [],
  }),
  components: { Pagination, SortProducts, InfoItem },
  methods: {
    async fetchProducts() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          `https://dev.api.logicpower.ua/user/catalog/product/list/all?pageSize=${this.pageSize}&pageNum=${this.pageNum}`
        );
        this.products = response.data.data.items;
        this.totalItems = response.data.data.totalItems;
        console.log(response.data.data.items);
      } catch (e) {
        this.errors.push(e);
      } finally {
        this.isLoading = false;
      }
    },
    onChangePage(data) {
      this.pageNum = data.paginationNum;
      this.fetchProducts();
    },
    changePageSize(data) {
      this.pageSize = data.pageSize;
      this.fetchProducts();
    },
    handleClickBtn(index) {
      this.isShow = true;
      this.infoItem.push(this.products[index]);
      console.log(this.infoItem[0]);
    },
    setIsShow(data) {
      this.infoItem = [];
      this.isShow = data.isShow;
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<template>
  <SortProducts @selectedNum="changePageSize" />
  <div class="products">
    <div
      class="products__item product"
      v-for="(item, index) in products"
      :key="item.products"
    >
      <div>
        <img
          class="product__photo"
          :src="item.images[0].url"
          :alt="item.name.uk"
        />
      </div>
      <div class="product__info">
        <h3 class="product__title">
          {{ item.name.uk !== null ? item.name.uk : this.isNull }}
        </h3>
        <p class="product__description">
          {{ item.description.uk !== null ? item.description.uk : this.isNull }}
        </p>
        <div class="product-price">
          <span class="product-price__text">Ціна: </span>
          <span class="product-price__number" v-if="item.prices.length > 0"
            >{{ item.prices[0].money.amount }}
            {{ item.prices[0].money.currency }}</span
          >
          <span v-else> Незазначено</span>
        </div>
        <button class="btn" @click="handleClickBtn(index)">Детально</button>
      </div>
    </div>
  </div>
  <Pagination
    :pageSize="pageSize"
    :totalItems="totalItems"
    @changePage="onChangePage"
  />
  <InfoItem
    :infoItem="infoItem"
    v-if="this.isShow !== false"
    @handleClick="setIsShow"
  />
</template>

<style>
.products {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.products__item {
  width: 226px;
  height: 410px;
  box-shadow: 0px 0px 4px grey;
  margin: 15px;
  text-align: center;
}
.product__photo {
  max-height: 150px;
}
.product__info {
  padding: 15px;
}
.product__title {
  max-height: 45px;
  font-size: 20px;
  line-height: 22px;
  color: rgb(32, 32, 139);
  margin-bottom: 30px;
  overflow: hidden;
}
.product__description {
  max-height: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgb(102, 102, 102);
  margin-bottom: 10px;
  overflow: hidden;
}
.product-price {
  margin-top: 30px;
  font-weight: 500;
  margin-bottom: 15px;
}
.product-price__number {
  text-decoration: underline;
  font-size: 16px;
}
.sort-products__num {
  margin: 50px 0 30px 15px;
}
.sort-products__num b {
  margin-right: 10px;
}
.btn {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
