<template>
  <h1>Inscrivez-vous facilement</h1>
  <form @submit.prevent>
    <!--Prenom-->
    <input
      :class="verifPrenom"
      v-model="firstname"
      type="text"
      placeholder="Prénom"
    />

    <!--Nom-->
    <input
      :class="verifNom"
      v-model="lastname"
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
      @click="validation"
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
const Register = {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },

  methods: {
    validation() {
      this.registre();
    },

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
      console.log(response, "test");
      let toktok = await response.json();
      console.log(toktok);
    },
  },

  computed: {
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

export default Register;
</script>

<style scoped>
.green {
  border: solid 2px green;
}

.red {
  border: solid 2px red;
}
</style>
