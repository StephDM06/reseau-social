<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/Profil">Profil</router-link>
    <router-link to="/about">A propos</router-link>
  </nav>
  <router-view />
</template>

<script></script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  height: 100px;
  background-color: aquamarine;
  align-items: center;
}
</style>
