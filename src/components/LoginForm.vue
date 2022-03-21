<template>
    <form @submit.prevent="submit()">
        <input type="email" v-model="email">
        <input type="password" v-model="password">
        <button type="submit">Connectez vous</button>
    </form>
</template>


<script>
const LoginForm = {
    data () {
      
    return {
      email: "",
      password: "",
      
    };
  },


  methods: {
    submit() {
      

      }
    },
  }



export default LoginForm;

</script>




<style>

</style>






































































