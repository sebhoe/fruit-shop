<template>
  <div class="product" v-if="product">
    <md-button class="product__home-button md-icon-button" to="/">
      <md-icon>home</md-icon>
    </md-button>
    <div class="product__details">
      <h2>{{ product.name }} - {{ formatPrice(product.price) }}</h2>
      <img
        :src="imagePath(product.photo_url)"
        :alt="product.name"
        @error="setFallbackImageUrl"
      />
    </div>
  </div>
</template>

<script>
import fruitMixin from "@/mixins/fruitMixin";

export default {
  name: "Product",
  mixins: [fruitMixin],
  created() {
    this.$store.dispatch("products/getProduct", this.$route.params.id);
  },
};
</script>

<style lang="scss">
.product {
  &__home-button.md-icon-button {
    margin-bottom: 1rem;
  }

  &__details {
    position: relative;
    max-width: 640px;
    margin: auto;

    h2 {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1rem;
      text-align: center;
      text-transform: uppercase;
      color: whitesmoke;
      background-color: #0000006b;
    }
  }
}
</style>
