<template></template>

<script>
import Post from "./Post.vue";

const List = {
  data() {
    return {
    Post:[],
    };
  },

  async mounted() {
    const Post = await fetch("https://snapi-coyote.osc-fr1.scalingo.io/posts"
    );
    let data = await Post.json();

    this.post = data.post;
    console.log(Post);
  },
};
export default List;
</script>

<style scoped></style>
