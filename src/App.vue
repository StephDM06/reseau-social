<template>
  <nav class="navbar">
    <h1>ACTU-DEV-WEB</h1>
    <router-link to="/">Accueil</router-link>
    <router-link to="/Profil">Profil</router-link>
    <router-link to="/about">A propos</router-link>
    <div>
      <input type="text" placeholder="Recherche" />
      <button class="like">Recherche</button>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
.navbar {
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  color: blue;
  border-bottom: 3px solid blue;
  border-radius: 5px;
}
.first {
  display: flex;
  flex-direction: row;
  gap: 20px;
  text-align: center;
}
input {
  border: none;
  align-items: center;
}
.like {
  border: none;
  color: blue;
}
</style>
