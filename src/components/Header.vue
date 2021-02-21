<template>
  <div class="header">
    <md-button to="/"><h1 class="header__title">Fresh Fruits</h1></md-button>
    <p class="header__description">
      Get the freshest fruits - delivered to you in minutes!
    </p>
  </div>
</template>

<style lang="scss">
.header {
  &__title {
    color: green;
  }

  &__description {
    font-weight: bold;
    color: mediumseagreen;
    margin-top: 0;
  }
}
</style>