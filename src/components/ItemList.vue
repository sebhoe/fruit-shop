<template>
  <div class="item-list">
    <md-list>
      <md-list-item
        v-for="(item, id) in filteredProducts"
        :key="id"
        :to="'product/' + item.id"
      >
        <md-avatar>
          <img
            :src="imagePath(item.photo_url)"
            :alt="item.name"
            @error="setFallbackImageUrl"
          />
        </md-avatar>
        <span class="md-list-item-text">{{ item.name }}</span>
        <span class="md-list-item-text item-list__price">{{
          formatPrice(item.price)
        }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import fruitMixin from "@/mixins/fruitMixin";

export default {
  name: "ItemList",
  props: {
    title: String,
    description: String,
  },
  mixins: [fruitMixin],
  computed: {
    filteredProducts() {
      return this.category === 'all' ? this.products : this.products.filter(product => this.category === product.category_url.split('/').pop());
    }
  },
  created() {
    this.$store.dispatch("products/getProducts");
  },
};
</script>

<style lang="scss">
.item-list {
  &__price.md-list-item-text {
    align-items: flex-end;
  }

  &__more {
    align-items: center;
  }

  .md-list {
    padding: 0;
    border: 1px solid rgba(#000, 0.12);

    &-item-content {
      max-width: 500px;
      margin: auto;
    }

    &.md-theme-default
      .md-list-item-container:not(.md-list-item-default):not(.md-list-item-expand):not([disabled]):hover {
      background-color: seashell;
    }
  }
  .md-avatar {
    width: 64px;
  }
}
</style>
