<script>
import { useRoute } from "vue-router";
const route = useRoute();

export default {
  props: ["infoItem"],
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("handleClick", { isShow: false });
    },
  },
};
</script>

<template>
  <!-- <div class="info-item">
    <div class="info-item__box">
      <button class="info-item__exit" @click="handleClick">X</button>
      <div class="info-item__container">
        <div class="info-item__photo-box">
          <img
            v-for="(image, index) in infoItem[0].images"
            class="info-item__photo"
            :src="image.url"
            :alt="infoItem[0].name.uk"
          />
        </div>
        <div class="item-info__big-photo">
          <img :src="infoItem[0].images[0].url" alt="big" />
        </div>
      </div>
      <div class="product__info">
        <h3 class="product__title">
          {{ infoItem[0].name.uk !== null ? infoItem[0].name.uk : this.isNull }}
        </h3>
        <p class="product__description">
          {{
            infoItem[0].description.uk !== null
              ? infoItem[0].description.uk
              : this.isNull
          }}
        </p>
        <div class="product-price">
          <span class="product-price__text">Ціна: </span>
          <span
            class="product-price__number"
            v-if="infoItem[0].prices.length > 0"
            >{{ infoItem[0].prices[0].money.amount }}
            {{ infoItem[0].prices[0].money.currency }}</span
          >
          <span v-else> Незазначено</span>
        </div>
      </div>
    </div>
  </div> -->
  <H1>hi. Info item{{ $route.params.id }}</H1>
</template>

<style>
.info-item {
  position: absolute;
  z-index: 20;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  width: 90vw;
  height: 90vh;
  background-color: white;
  box-shadow: 0px 0px 10px grey;
  overflow-x: hidden;
}
.info-item__box {
  position: relative;
}
.info-item__exit {
  cursor: pointer;
  position: absolute;
  z-index: 20;
  right: 20px;
  top: 20px;
  border-radius: 8px;
  background-color: grey;
  color: rgb(255, 250, 241);
}
.info-item__container {
  max-height: 450px;
  margin: 20px;
  display: flex;
}
.info-item__photo-box {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
.info-item__photo {
  cursor: pointer;
  width: 100px;
  height: 100px;
}
.item-info__big-photo {
  width: 450px;
  margin-left: 15px;
}
</style>
