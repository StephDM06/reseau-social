<template>
  <nav class="navbar">
    <img src="@/img/logo.png" />
    <router-link class="route" to="/">Accueil</router-link>
    <router-link class="route" to="/Profil">Profil</router-link>
    <router-link class="route" to="/about">A Propos</router-link>
  </nav>
  <router-view />
</template>

<script></script>

<style scoped>
.navbar {
  background-color: #00d1c5;
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
img {
  width: 150px;
  height: 80px;
}
.route {
  border: none;
  border-radius: 5px;
  width: 110px;
  height: 30px;
  color: rgb(102, 100, 100);
  background-color: rgb(180, 177, 177);
}
</style>
