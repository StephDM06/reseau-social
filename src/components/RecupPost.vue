<template>
  <div id="fil">
    <p>
      Poster par: <strong>{{ firstname }} {{ lastname }}</strong>
    </p>
    <p>
      Titre du post: <strong>{{ title }}</strong>
    </p>
    <p>
      <i>{{ contentPost }}</i>
    </p>
  </div>
</template>

<script>
import ProfilDonnees from "@/views/Profil.vue";

const List = {
  props: {
    title: String,
    contentPost: String,
    firstname: String,
    lastname: String,
  },
  components: {
    ProfilDonnees: ProfilDonnees,
  },
};
export default List;
</script>

<style scoped></style>
