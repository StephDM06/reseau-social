<template>
  <div>
    <h1>Se connecter</h1>
    <LoginForm @submit="login" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

const Authentication = {
  data() {
    return {
      user: {},
    };
  },



  methods: {
  async login() {
      this.users = { email, password };
      await fetch ("https://snapi-coyote.osc-fr1.scalingo.io/")
    },
  },


  components: {
    LoginForm,
  },
};

/* PARTIE AUTHENTIFICATION VALIDE */
export default Authentication;
</script>
