<template>
  <div id="principale">
    <h1>Votre fil d'actualité</h1>
    <h3>Les derniers post</h3>
  </div>
</template>

<script>
const DataPost = {
  data() {
    return {
      post: [],
    };
  },
};

export default DataPost;
</script>

<style scoped>
#principale {
  text-align: center;
}
</style>
