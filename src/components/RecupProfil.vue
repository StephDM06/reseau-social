<template>
  <div id="main-profil">
    <section id="profil">
      <h1>Profil</h1>
    </section>
    <section id="donnees">
      <p>Nom: {{ nom }}</p>
      <p>Prénom: {{ prenom }}</p>
      <p>Mail: {{ mail }}</p>
    </section>
  </div>
</template>

<script>
const ProfilData = {
  props: {
    nom: String,
    prenom: String,
    mail: String,
  },
};
export default ProfilData;
</script>
