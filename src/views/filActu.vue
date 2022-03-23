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

    <div class="postsContainer">
      <List
        class="liste"
        v-for="(element, index) in posts"
        :key="index"
        :lastname="element.lastname"
        :firstname="element.firstname"
        :title="element.title"
        :content="element.content"
      >
      </List>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import List from "@/components/RecupPost.vue";

const DataPost = {
  data() {
    return {
      posts: [],
      verif: true,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjM5OWJlOTI3ZGRiOTAwMWE4NzViZDUiLCJpYXQiOjE2NDgwMjQ5MTgsImV4cCI6MTY0ODExMTMxOH0.caIFiFoS-QCjwSdUCs6c8IoaV5Y1Y3DtKjeHuyTD3Cg",

      //data properties pour récuperer les valuers des inputs d'un nouveau post
      title: "",
      content: "",
    };
  },
  components: {
    Post: Post,
    List: List,
  },
  methods: {
    async getPosts() {
      const Post = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/posts"
      );
      let data = await Post.json();

      this.posts = data.posts;
    },
    getNewPost() {
      console.log("coucou");
      if (this.title == "" && this.content == "") {
        return alert("veuillez remplir les champs");
      } else {
        const newPost = { title: this.title, content: this.content };
        // this.newPostTable.push(this.content);
        // this.title = "";
        // this.content = "";
        this.newPublication(newPost);
      }
    },
    async newPublication(post) {
      const publi = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/post",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + this.token,
          },
        }
      );

      if (publi.status === 200) {
        this.getPosts();
      }
    },
  },
  async mounted() {
    this.getPosts();
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
  margin-bottom: 10%;
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
.liste {
  width: 50%;
}
/* Fin style form new post*/

/**  Style du conteneur qui tient tous les posts */
.postsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
