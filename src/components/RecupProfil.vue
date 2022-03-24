<template>
  <div id="main-profil">
    <section id="profil">
      <h1>CARTE DE VISITE ACTU-DEV-WEB</h1>
    </section>
    <div class="rect">.</div>
    <section id="donnees">
      <p>Nom: {{ nom }}</p>
      <p>Prénom: {{ prenom }}</p>
      <p class="mailmail">Adresse mail : {{ mail }}</p>
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

<style>
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
  padding-top: 100px;
}
#main-profil {
  font-display: flex;
  text-align: center;
  width: 50%;
  height: 400px;
  margin-left: 25%;
  margin-top: 10%;
  background-color: #9efff9;
  border: solid 4px #00857d;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px #00857d;
}

#profil h1 {
  color: #00857d;
  font-weight: 800;
  text-decoration: underline;
}

#donnees p {
  display: flex;
  text-align: center;
  color: #00857d;
  font-size: 20px;
  font-weight: 600;
}

.mailmail {
  position: relative;

  right: 40px;
}

.rect {
  color: #00857d;
  display: flex;
  background: #00857d;
  height: 40px;
  position: relative;
  top: 50px;
}
</style>
