<template>
  <div>
    <ItemSearch />
    <TabNavigation />
    <ItemList />
  </div>
</template>

<script>
import TabNavigation from "@/components/TabNavigation.vue";
import ItemList from "@/components/ItemList.vue";
import ItemSearch from "../components/ItemSearch.vue";

export default {
  name: "Home",
  components: {
    TabNavigation,
    ItemList,
    ItemSearch,
  },
};
</script>
