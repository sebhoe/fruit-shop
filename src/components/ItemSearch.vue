<template>
  <div class="item-search">
    <md-autocomplete
      v-model="selectedProduct"
      :md-options="products"
      @md-selected="navigateTo(selectedProduct)"
    >
      <label>Search...</label>

      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-highlight-text :md-term="term">
          {{ item.name }}
        </md-highlight-text>
      </template>

      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        Sorry, nothing matching "{{ term }}" found
      </template>
    </md-autocomplete>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ItemSearch",
  data() {
    return {
      selectedProduct: null,
      productList: [],
    };
  },
  computed: {
    ...mapState({
      products: (state) =>
        state.products.all.map(({ id, name }) =>
          //prevent searching in other properties
          ({ id, name })
        ),
    }),
  },
  methods: {
    navigateTo(product) {
      this.$router.push({ name: "Product", params: { id: product.id } });
    },
  },
};
</script>

<style lang="scss">
.item-search {
  max-width: 400px;
  margin: 1rem auto;
}
</style>