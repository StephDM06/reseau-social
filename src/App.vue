<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/about">A propos</router-link>
  </nav>
  <router-view />
</template>

<script>
const principale = {};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
}
</style>
