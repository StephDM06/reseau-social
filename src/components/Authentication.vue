<template>
  <div>
    <h1>J'ai déjà un compte</h1>
    <form @submit.prevent>
      <input type="email" v-model="authentif.email" />
      <input type="password" v-model="authentif.password" />

      <input type="submit" @click="validation" value="connectez vous" />
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
      console.log(toktok);

      if (toktok.success === true) {
        localStorage.setItem("token", toktok.token);
        this.$router.push("/");
      }
    },
  },
};

export default LoginForm;
</script>

<style></style>
