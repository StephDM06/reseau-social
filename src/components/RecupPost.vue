<template>
  <div id="fil">
    <p>{{ lastname }} {{ firstname }}</p>
    <p>{{ title }}</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
const List = {

  props: {
    title: String,
    content: String,
    firstname: String,
    lastname: String,
  },


};
export default List;
</script>

<style scoped>

</style>
