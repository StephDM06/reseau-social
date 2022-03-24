<template>
  <!-- dans mon template : input mail & connexion authentif qui englobera les datas mail et password !-->
  <div>
    <h1>J'ai déjà un compte</h1>
    <form @submit.prevent>
      <input type="email" v-model="authentif.email" />
      <!-- creation de authentif par rapport au data prop !-->
      <input type="password" v-model="authentif.password" />

      <input type="submit" @click="validation" value="connectez vous" />
      <!-- Appel de validation au click & value pour le contenu du bouton & type submit pour le formulaire !-->
    </form>
  </div>
</template>

<script>
const LoginForm = {
  data() {
    /* data properties */
    return {
      authentif: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    /* creations de la methods pour effectuer la connexion */
    validation() {
      this.connexion();
    },

    async connexion() {
      const response = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/login" /* adresse du serveur avec le slash login pour la connexion et registrer partie kenny  */,
        {
          method: "POST",
          body: JSON.stringify(this.authentif),
          headers: {
            "Content-Type":
              "application/json" /* app/JSON formule de base avec le content type */,
          },
        }
      );
      console.log(
        response,
        "test"
      ); /* renvois de la promesse du token lors de la connexion  passage du statut 422 à 200 du serveur */
      let toktok = await response.json();
      console.log(toktok);

      if (toktok.success === true) {
        /* condition que si valeur token == true , alors ça redirige vers la page filActu  et setItem pour stocker les valeurs et get items des autres pour recuperer les valeurs */
        localStorage.setItem("token", toktok.token);
        this.$router.push("/");

        /* formulue pour pusher la page / quand on click sur connection si cest true */
      }
    },
  },
};

export default LoginForm;
</script>

<style></style>
