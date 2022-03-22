<template></template>

<script>
const List = {
  data() {
    return {
      list: [],
    };
  },

  async mounted() {
    const listPost = await fetch("https://snapi-coyote.osc-fr1.scalingo.io/");
    let data = await listPost.json();
    this.list = data.post;
    console.log("data");
  },
};
export default List;
</script>

<style scoped></style>
