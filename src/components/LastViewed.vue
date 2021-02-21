<template>
  <div class="last-viewed" v-if="filteredLastViewedProducts.length">
    <h2>Last Viewed</h2>
    <md-list>
      <md-list-item
        v-for="item in filteredLastViewedProducts"
        :key="item.id"
        :to="'/product/' + item.id"
      >
        <md-avatar>
          <img
            :src="imagePath(item.photo_url)"
            :alt="item.name"
            @error="setFallbackImageUrl"
          />
        </md-avatar>
        <span class="md-list-item-text">{{ item.name }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import { mapState } from "vuex";

import fruitMixin from "@/mixins/fruitMixin";

export default {
  name: "LastViewed",
  mixins: [fruitMixin],
  computed: {
    ...mapState({
      lastViewedProducts: (state) =>
        state.products.lastViewedProducts,
    }),
    filteredLastViewedProducts() {
      // filter out current product if we are on the product detail page
      return this.$route.name === "Product" && this.$route.params.id > 0
        ? this.lastViewedProducts.slice(1, 6)
        : this.lastViewedProducts.slice(0, 5);
    },
  },
  mounted() {
    if (localStorage.getItem("lastViewedProducts")) {
      try {
        this.$store.dispatch(
          "products/setLastViewedProducts",
          JSON.parse(localStorage.getItem("lastViewedProducts"))
        );
      } catch (error) {
        localStorage.removeItem("lastViewedProducts");
      }
    }
  },
};
</script>

<style lang="scss">
.last-viewed {
  margin-top: 2rem;

  .md-list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;

    &-item-content {
      flex-direction: column;

      & > .md-avatar:first-child {
        margin-right: 0;
      }

      .md-avatar {
        width: 64px;
      }
    }
  }
}
</style>
