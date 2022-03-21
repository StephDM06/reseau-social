<template>
  <nav id="main-nav">
    <div class="first">
      <h1>ACTU-DEV-WEB</h1>
      <p>Acceuil</p>
      <p>Profil</p>
      <p>actualite</p>
      <p>A Propos</p>
    </div>
    <div>
      <input type="text" placeholder="Recherche" />
      <button class="like">LIKE</button>
    </div>
  </nav>
</template>
<script>
const Nav = {};

export default Nav;
</script>

<style>
#main-nav {
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
