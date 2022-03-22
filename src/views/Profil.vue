<template>
  <div id="main-profil">
    <section id="profil">
      <h1>Profil</h1>
    </section>
    <section id="donnees">
      <p>Nom: {{ nom }}</p>
      <p>Prénom: {{ prenom }}</p>
      <p>Mail: {{ mail }}</p>
      <p>Mot de passe: {{ mdp }}</p>
    </section>
  </div>
</template>

<script>
const Profil = {
  data() {
    return {
      profil: [],
    };
  },
  methods: {
    dataProfil() {},
  },
};

export default Profil;
</script>

<style scoped>
#profil {
  font-family: lato;
  text-align: center;
  padding-top: 5%;
}
#donnees {
  font-family: lato;
  width: 350px;
  text-align: left;
  margin-left: 40%;
  padding-top: 20px;
}
#main-profil {
  font-display: block;
  justify-content: center;
  width: 50%;
  margin-left: 25%;
  margin-top: 5%;
  background-color: aquamarine;
  border-radius: 10px;
}
</style>
