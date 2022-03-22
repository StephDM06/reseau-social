<template>
  <form @submit.prevent>
    <input type="email" v-model="authentif.email" />
    <input type="password" v-model="authentif.password" />
    <input type="submit" @click="validation" value="connectez vous" />
  </form>
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
    },
  },
};

export default LoginForm;
</script>

<style></style>
