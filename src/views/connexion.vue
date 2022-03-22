<template>
  <LoginForm></LoginForm>
  <Register></Register>
</template>

<script>
import Register from "@/components/Register.vue";
import LoginForm from "@/components/Authentication.vue";

const authent = {
  components: {
    LoginForm: LoginForm,
    Register: Register,
  },
};



export default authent;
</script>

<style></style>
