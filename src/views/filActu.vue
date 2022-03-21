<template>
  <div id="principale">
    <h1>Votre fil d'actualité</h1>
    <h3>Les derniers post</h3>

    <!--form pour creation nouveau post-->
    <div class="newPost">
      <span id="newPostTitle">Create Post:</span>
      <form id="newPostForm" action="">
        
        <input type="text" name="userInput" id="userInput" placeholder="Username..."/>

        <input type="text" name="dateInput" id="dateInput" placeholder="Date of post..."/>
        <input
          placeholder="Your post..."
          maxlength="80"
          type="text"
          name="contentInput"
          id="contentInput"
        />
        <button type="submit" id="buttonAddPost">Add Post</button>
      </form>
    </div>

    <Post
      like="likeCount"
      user="userName"
      date="postDate"
      content="postContent"
    >
    </Post>
  </div>
</template>

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
