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
const List = {
  props: {
    title: String,
    contentPost: String,
    firstname: String,
    lastname: String,
  },
};
export default List;
</script>

<style scoped></style>
