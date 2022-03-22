<template>
  <div class="card">
    <h1 class="card_title" v-if="mode == 'login'">Connexion</h1>
    <h1 class="card_title" v-else>inscritption</h1>
    <p class="card_subtitle" else-if>
      Tu'as déja un compte<span
        class="card_action"
        @click="switchtocreatacompte()"
        >se connecter</span
      >
    </p>
    <p class="card_subtitle" v-if="mode == 'login'">
      Tu n'a pas encore de compte?<span
        class="card_action"
        @click="switchtologin()"
        >créer un compte</span
      >
    </p>
    <div class="form-row">
      <input
        v-model="email"
        class="form-input"
        type="text"
        placeholder="adresse mail"
      />
    </div>
    <div class="form-row" v-if="mode == 'create'">
      <input
        v-model="prenom"
        class="form-input"
        type="text"
        placeholder="prenom"
      />
      <input v-model="nom" class="form-input" type="text" placeholder="nom" />
    </div>
    <div class="form-row">
      <input
        v-model="password"
        class="form-input"
        type="password"
        placeholder="mot de passe"
      />
    </div>
    <div class="form-row">
      <button class="desabled" v-if="mode == 'login'">Connexion</button>
      <button
        class="desabled"
        :class="{ 'button-desabled': !valitedFields }"
        v-else
      >
        Créer mon compte
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      mode: "login",
    };
  },
  methods: {
    switchtocreatacompte: function () {
      this.mode = "create";
    },
    switchtologin: function () {
      this.mode = "login";
    },
  },
  computed: {
    valitedFields: function () {
      if (this.mode == "create") {
        if (
          this.email != "" &&
          this.prenom != "" &&
          this.nom != "" &&
          this.password != ""
        ) {
          return true;
        } else {
          return flase;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        }
        return false;
      }
    },
  },
};
</script>

<style></style>
