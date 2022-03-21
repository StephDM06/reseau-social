<template></template>

<script>
import Post from "@/components/Post.vue";

const DataPost = {
  data() {
    return {
      post: [],
    };
  },
  components: {
    Post: Post,
  },
};

export default DataPost;
</script>
<style scoped>
#principale {
  font-family: lato;
  text-align: center;
}
/* Style form new post*/
.newPost {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  align-items: center;
}

#newPostForm {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  align-self: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

#contentInput {
  width: 100%;
}

#buttonAddPost {
  border: none;
  background-color: #b0eeb3;
  border-radius: 15%;
  cursor: pointer;
}

#newPostTitle {
  background-color: #b0eeb3;
  font-size: 1.5rem;
  width: 20%;
}
/* Fin style form new post*/
</style>
