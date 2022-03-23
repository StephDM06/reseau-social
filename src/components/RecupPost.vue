<template>
  <div id="fil">
    <p>{{ firstname }} {{ lastname }}</p>
    <p><strong>{{ title }}</strong></p>
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
