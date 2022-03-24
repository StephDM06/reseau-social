<template>
  <div class="main-form">
    <h1>Inscrivez-vous facilement</h1>
    <form @submit.prevent class="identif">
      <!--Prenom-->
      <label for="name">Prénom *</label>
      <input :class="verifPrenom" v-model="firstname" type="text" />

      <!--Nom-->
      <label for="nom">Nom *</label>
      <input :class="verifNom" v-model="lastname" type="text" /><br />

      <!--Mail-->
      <label for="mail">mail *</label>
      <input :class="verifMail" v-model="email" type="email" /><br />

      <!--Mot de passe-->
      <label for="password">Mot de Passe </label>
      <input
        :class="verifMdp"
        v-model="password"
        type="password"
        placeholder="(6 caractères minimum)"
      /><br />
      <br />

      <!--[BOUTON] Envoyer formulaire-->
      <input
        type="submit"
        value="Inscription"
        v-show="allConfirm"
        @click="validation"
        class="button"
      />

      <!--Condition d'utilisation que personne ne lit-->
      <p>
        En cliquant sur S’inscrire, vous acceptez nos Conditions générales.
        Découvrez comment nous recueillons, utilisons et partageons vos données
        en lisant notre Politique d’utilisation des données et comment nous
        utilisons les cookies et autres technologies similaires en consultant
        notre Politique d’utilisation des cookies.
      </p>
    </form>
  </div>
</template>

<script>
const Register = {
  //DATAS____________________________________________________________________________________________
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },

  //METHODES_________________________________________________________________________________________
  methods: {
    validation() {
      this.registre();
    },
    //SYSTEME D'INSCRIPTION POUR OBTENIR TOKEN
    async registre() {
      const response = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/register",
        {
          method: "POST",
          body: JSON.stringify({
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
          }),

          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = await response.json();
      if (data.success === true) {
        this.connexion();
      }
      console.log(toktok);
    },

    async connexion() {
      const response = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response, "test");

      let toktok = await response.json();
      if (toktok.success === true) {
        localStorage.setItem("token", toktok.token);
        this.$router.push("/");
      }
    },
  },

  //COMPUTED________________________________________________________________________________________
  computed: {
    //Vérification automatique des champs
    verifPrenom() {
      if (String(this.firstname).length > 2) {
        return "green";
      }
      return "red";
    },

    verifNom() {
      if (String(this.lastname).length > 3) {
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

    //Confirmation du formulaire
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
//EXPORTATION DU Register
export default Register;
</script>
<<<<<<< HEAD
=======
<style scoped>
.main-form {
  width: 50%;
  height: 60%;
  border-radius: 5px;
  margin-left: 25%;
}
.identif {
  display: flex;
  flex-direction: column;
  padding-left: 25%;
}
input {
  width: 60%;
  text-align: center;
}
h1 {
  text-align: center;
  font-size: 2rem;
  color: #007871;
}
.green {
  border: solid 2px #007871;
}
.red {
  border: solid 2px red;
}
p {
  text-align: justify;
  width: 60%;
}
.button {
  background-color: #007871;
}
</style>
>>>>>>> 65475671caccbb0a96f91da86bbd59aae5bebd1b
