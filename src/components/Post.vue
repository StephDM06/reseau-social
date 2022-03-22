<template>
  <div class="postContainer">
    <div id="post">
      <span>Posted by:{{ user }}</span>
      <span>Posted the: {{ date }}</span>
      <span>{{ content }}</span>
      <span class="buttonLike">like {{ like }}</span>
    </div>
  </div>
</template>

<script>
const Post = {
  data() {
    return {
      postTableau: [],
      userName: "",
      postDate: "",
      postContent: "",
      likeCount: "",
    };
  },

  props: {
    like: Number,
    user: String,
    date: Date,
    content: String,
  },
};

export default Post;
</script>

<style scoped></style>
