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
    <div class="mainPostsContainer">
      <div class="postsContainer">
        <div id="indivPost" v-for="(element, index) in posts" :key="index">
          <List
            class="liste"
            :key="index"
            :lastname="element.lastname"
            :firstname="element.firstname"
            :title="element.title"
            :content="element.content"
          >
          </List>
          <button>essaie</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import List from "@/components/RecupPost.vue";

const DataPost = {
  data() {
    return {
      //data properties pour récuperer les valuers des inputs d'un nouveau post et afficher les posts existants
      posts: [],
      verif: true,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjM5OWJlOTI3ZGRiOTAwMWE4NzViZDUiLCJpYXQiOjE2NDgwMjQ5MTgsImV4cCI6MTY0ODExMTMxOH0.caIFiFoS-QCjwSdUCs6c8IoaV5Y1Y3DtKjeHuyTD3Cg",
      title: "",
      content: "",
    };
  },
  //Déclaration des composants et intégration dans le VDOM
  components: {
    Post: Post,
    List: List,
  },
  methods: {
    //Récupération des posts sur le serveur
    async getPosts() {
      const Post = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/posts"
      );
      let data = await Post.json();

      this.posts = data.posts;
    },
    getNewPost() {
      //Attribution des valeurs du nouveau post title et content
      if (this.title == "" && this.content == "") {
        return alert("veuillez remplir les champs");
      } else {
        const newPost = { title: this.title, content: this.content };

        this.newPublication(newPost);
      }
    },
    //Envoi des nouveaux post et raffraichissement de l'affichage
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
      // Vérification du retour serveur et rappel de la méthode d'affichage
      if (publi.status === 200) {
        this.getPosts();
      }
    },
  },
  //Au montage de l'application envoi de la requète des posts
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
.indivPost {
  width: 50%;
}
/* Fin style form new post*/

/**  Style du conteneur qui tient tous les posts */
.postsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 80%;
}

.mainPostsContainer{
  display: flex;
  justify-content: center;
}
</style>
