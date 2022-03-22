<template>
  <h1>Inscrivez-vous facilement</h1>
  <form @submit.prevent>
    <!--Prenom-->
    <input
      :class="verifPrenom"
      v-model="prenom"
      type="text"
      placeholder="Prénom"
    />

    <!--Nom-->
    <input
      :class="verifNom"
      v-model="nom"
      type="text"
      placeholder="Nom"
    /><br />

    <!--Mail-->
    <input
      :class="verifMail"
      v-model="email"
      type="email"
      placeholder="E-mail"
    /><br />

    <!--Mot de passe-->
    <input
      :class="verifMdp"
      v-model="password"
      type="password"
      placeholder="Mot de passe (6 caractères minimum)"
    /><br />
    <br />

    <input
      type="submit"
      value="Inscription"
      v-show="allConfirm"
      @click="addToProfile"
    />

    <h6>
      En cliquant sur S’inscrire, vous acceptez nos Conditions générales.
      Découvrez comment nous recueillons, utilisons et partageons vos données en
      lisant notre Politique d’utilisation des données et comment nous utilisons
      les cookies et autres technologies similaires en consultant notre
      Politique d’utilisation des cookies. Vous recevrez peut-être des
      notifications par texto de notre part et vous pouvez à tout moment vous
      désabonner
    </h6>
  </form>
</template>

<script>


const Registrer = {
  data() {
    return {
      profil: [],
      prenom: "",
      nom: "",
      email: "",
      password: "",
    };
  },

  methods: {
    setNewInfo(e) {
      this.prenom = e.target.value;
      this.nom = e.target.value;
      this.password = e.target.value;
      this.email = e.target.value;
    },

    addToProfile() {
      this.profil.push(this.prenom);
      this.profil.push(this.nom);
      this.profil.push(this.email);
      this.profil.push(this.password);
      console.log(this.profil);
    },
  },

  computed: {
    verifPrenom() {
      if (String(this.prenom).length > 2) {
        return "green";
      }
      return "red";
    },

    verifNom() {
      if (String(this.nom).length > 3) {
        return "green";
      }
      return "red";
    },

    verifMdp() {
      if (String(this.password).length > 6) {
        return "green";
      }
      return "red";
    },

    verifMail() {
      if (String(this.email).length > 6) {
        return "green";
      }
      return "red";
    },

    allConfirm() {
      if (
        this.verifNom == "green" &&
        this.verifPrenom == "green" &&
        this.verifMdp == "green" &&
        this.verifMail == "green"
      ) {
        return true;
      } else return false;
    },
  },
};

export default Registrer;
</script>

<style scoped>
.green {
  border: solid 2px green;
}

.red {
  border: solid 2px red;
}
</style>
