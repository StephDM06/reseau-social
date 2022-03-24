<template>
  <div id="principale">
    <button
      id="openCreatePost"
      @click="verifToken() ? (showtext = !showtext) : ''"
    >
      Post something
    </button>
    <input type="submit" @click="deconnexion" value="Déconnexion" />
    <!-- 
    form pour creation nouveau post -->
    <div class="newPost" v-show="showtext">
      <span id="newPostTitle">Create Post:</span>
      <form id="newPostForm">
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
          <div class="main-comment">
            <button @click="showcomment = index">commenter</button>
            <button @click="addcomment(element._id)">
              poster: {{ element.content.length }}
            </button>
            <textarea
              name=""
              id=""
              cols="20"
              rows="1"
              v-show="showcomment === index"
              v-model="contentComment"
            ></textarea>
            <button @click="addLike(element._id)">
              Like : {{ element.likes.length }}
            </button>
          </div>
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
      toktok:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjNiMzNmM2FjODJlZTAwMWJiNGY4MzgiLCJpYXQiOjE2NDgwNDcxMTgsImV4cCI6MTY0ODEzMzUxOH0.3JUX95YqofTh6IRYmGxkEA1jAMrCy9VzK2JvsV3R7AA",
      title: "",
      content: "",
      showtext: false,
      showcomment: null,
      Like: 0,
    };
  },
  //Déclaration des composants et intégration dans le VDOM
  components: {
    Post: Post,
    List: List,
  },
  methods: {
    deconnexion() {
      this.deconnexion();
    },

    async deconnexion() {
      const response = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/login" /* adresse du serveur avec le slash login pour la connexion et registrer partie kenny  */,
        {
          method: "POST",
          body: JSON.stringify(this.authentif),
          headers: {
            "Content-Type":
              "application/json" /* app/JSON formule de base avec le content type */,
          },
        }
      );
      console.log(
        response,
        "test"
      ); /* renvois de la promesse du token lors de la connexion  passage du statut 422 à 200 du serveur */
      let toktok = await response.json();
      console.log(toktok);

      if (toktok.success === true) {
        /* condition que si valeur token == true , alors ça redirige vers la page filActu  et setItem pour stocker les valeurs et get items des autres pour recuperer les valeurs */
        localStorage.removeItem("token", toktok.token);
        this.$router.push("/");
      }
    },
    verifToken() {
      if (!this.toktok) {
        this.$router.push("/connexion");
        return false;
      }

      return true;
    },

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
      // if (this.title == "" && this.content == "") {
      //   return alert("veuillez remplir les champs");
      // } else {
      const newPost = { title: this.title, content: this.content };

      this.newPublication(newPost);
      // }
    },
    //Envoi des nouveaux post et raffraichissement de l'affichage
    async newPublication(post) {
      if (this.verifToken() === false) {
        return;
      }

      const publi = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/post",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + this.toktok,
          },
        }
      );
      // Vérification du retour serveur et rappel de la méthode d'affichage
      if (publi.status === 200) {
        this.getPosts();
        this.showtext = false;
      }
    },
    async addLike(id) {
      const response = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/post/like",
        {
          method: "POST",
          body: JSON.stringify({
            postId: id,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + this.toktok,
          },
        }
      );

      if (response.status === 200) {
        this.getPosts();
      }
    },
    async addcomment(id) {
      const response = await fetch(
        "https://snapi-coyote.osc-fr1.scalingo.io/post/comment",
        {
          method: "POST",
          body: JSON.stringify({
            postId: id,
            content: this.content,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "bearer " + this.toktok,
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        this.getPosts();
      }
    },
  },

  mounted() {
    this.toktok;
    // this.toktok = localStorage.getItem("token");
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
  width: 50%;
}
.mainPostsContainer {
  display: flex;
  justify-content: justify;
}
.main-comment {
  display: flex;
  flex-wrap: wrap;
  border: 2px solid black;
}
</style>
