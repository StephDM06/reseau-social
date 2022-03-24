<template>
  <div class="formident">
    <h1 class="titre">Connectez-vous!</h1>
    <form @submit.prevent class="identite">
      <input type="email" v-model="authentif.email" />
      <input type="password" v-model="authentif.password" />
      <input
        type="submit"
        @click="validation"
        value="Connecter"
        class="button"
      />
    </form>
  </div>
</template>

<script>
const LoginForm = {
  data() {
    return {
      authentif: {
        email: "test@test.com",
        password: "test",
      },
    };
  },

  methods: {
    validation() {
      this.connexion();
    },

    async connexion() {
      const response = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/login",
        {
          method: "POST",
          body: JSON.stringify(this.authentif),
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
};

export default LoginForm;
</script>

<style>
.titre {
  color: #007871;
  font-size: 2rem;
  padding-left: 30%;
}
.formident {
  margin-left: 25%;
  width: 50%;
  border-radius: 5px;
}
.identite {
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 5px;
  padding-bottom: 20px;
}
.button {
  background-color: #007871;
  border: none;
  color: white;
}
</style>
