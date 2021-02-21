<template>
  <div id="app">
    <Header />
    <router-view :key="$route.path" />
    <LastViewed />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import LastViewed from "./components/LastViewed.vue";

export default {
  components: { Header, LastViewed },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 900px;
  padding: 1rem;
  margin: 2rem auto;
  box-shadow: -10px 10px 50px rgba(0, 0, 0, 0.1);
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
