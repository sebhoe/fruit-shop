<template>
  <div class="tab-navigation">
    <md-tabs md-alignment="centered" :md-active-tab="category">
      <md-tab id="all" md-label="All" @click="navigateTo('all')"></md-tab>
      <md-tab
        v-for="category in categories"
        :key="category.name"
        :id="category.name"
        :md-label="category.name"
        @click="navigateTo(category.name)"
      ></md-tab>
    </md-tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TabNavigation",
  computed: {
    ...mapState({
      categories: (state) => state.products.categories,
      category: (state) => state.products.category,
    }),
  },
  methods: {
    navigateTo(category) {
      this.$store.dispatch("products/setCategory", category);
    },
  },
  created() {
    this.$store.dispatch("products/getCategories");
  },
};
</script>

<style lang="scss">
.tab-navigation {
  .md-tabs.md-theme-default {
    .md-tabs-navigation {
      flex-wrap: wrap;
      background-color: lightseagreen;
    }
    .md-tabs-indicator {
      background-color: darkolivegreen;
    }
    .md-tabs-navigation .md-button.md-active {
      color: darkolivegreen;
    }
  }

  .md-button:not([disabled]).md-focused:before,
  .md-button:not([disabled]):active:before,
  .md-button:not([disabled]):hover:before {
    background-color: seashell;
  }
}
</style>