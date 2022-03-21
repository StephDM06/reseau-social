<template>
  <div>
    <section id="profil">
      <h1>Profil</h1>
    </section>
    <section id="donnees">
      <p>Nom: {{ nom }}</p>
      <p>Prénom: {{ prenom }}</p>
      <p>Mail: {{ mail }}</p>
      <p>Mot de passe: {{ mdp }}</p>
      <p>Date de naissance: {{ jour }} {{ mois }} {{ annee }}</p>
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
  padding-top: 15%;
}
</style>
