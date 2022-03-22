<template>
  <nav class="navbar">
    <h1>ACTU-DEV-WEB</h1>
    <router-link class="route" to="/">Accueil</router-link>
    <router-link class="route" to="/Profil">Profil</router-link>
    <router-link class="route" to="/about">A Propos</router-link>
    <div>
      <input type="text" placeholder="Recherche" />
      <button class="like">Recherche</button>
    </div>
  </nav>
  <router-view />
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
.route {
  border: none;
  border-radius: 5px;
  width: 80px;
  color: rgb(102, 100, 100);
  background-color: rgb(180, 177, 177);
}
</style>
