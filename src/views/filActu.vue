<template>
  <div id="principale">
    <span id="openCreatePost">Post something</span>
    <!--form pour creation nouveau post-->
    <div class="newPost">
      <span id="newPostTitle">Create Post:</span>
      <form id="newPostForm" action="">
        <input
          type="text"
          name="titleInput"
          id="titleInput"
          placeholder="Title..."
          v-model.lazy="title"
        />

        <input
          placeholder="Your post..."
          maxlength="80"
          type="text"
          name="contentInput"
          id="contentInput"
          v-model.lazy="content"
        />
        <span id="buttonAddPost" @click="getNewPost">Add Post</span>
      </form>
    </div>
    <List> </List>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import List from "@/components/RecupPost.vue";

const DataPost = {
  data() {
    return {
      //tableau pour stocker nouveau post
      newPostTable: [],

      //data properties pour récuperer les valuers des inputs d'un nouveau post
      title: "",
      content: "",
    };
  },

  methods: {
    getNewPost() {
      if (title == "" && content == "") {
        return alert("veuillez remplir les champs");
      } else {
        this.newPostTable.push(this.title);
        this.newPostTable.push(this.title);
        this.title = "";
        this.content = "";
        console.log(this.newPostTable);
      }
    },
  },

  components: {
    Post: Post,
    List: List,
  },
};

export default DataPost;
</script>
<style scoped>
#principale {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

#openCreatePost {
  cursor: pointer;
  margin-left: 60rem;
  background-color: #b0eeb3;
  padding: 0.5rem;
  border-radius: 25%;
}
/* Fin style form new post*/
</style>
