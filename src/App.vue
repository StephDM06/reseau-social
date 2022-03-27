<template>
  <nav class="navbar">
    <img src="@/img/logo.png" />
    <button id="buttonnav">
      <router-link class="route" to="/" id="buttonnav">Accueil</router-link>
    </button>
    <button id="buttonnav">
      <router-link class="route" to="/Profil" id="buttonnav"
        >Profil</router-link
      >
    </button>
    <button id="buttonnav">
      <router-link class="route" to="/about" id="buttonnav"
        >A Propos</router-link
      >
    </button>
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
  font-family: lato;
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
#buttonnav {
  text-decoration: none;
  cursor: pointer;
  background-color: #239991;
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
  margin-top: 1rem;
  color: black;
  width: 200px;
}
</style>
