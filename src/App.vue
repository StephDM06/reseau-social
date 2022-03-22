<template>
  <nav class="navbar">
    <router-link to="/">Accueil</router-link>
    <router-link to="/Profil">Profil</router-link>
    <router-link to="/about">A propos</router-link>
  </nav>
  
  <router-view />
</template>

<script>




</script>

<style scoped>
.navbar{
  display: flex;
  justify-content: space-around;
}
</style>
