<template>
  <div id="principale">
    <button
      id="openCreatePost"
      @click="verifToken() ? (showtext = !showtext) : ''"
    >
      Poster une nouveauté
    </button>
    <input type="submit" @click="deconnexion" value="Déconnexion" />
    <!-- 
    form pour creation nouveau post -->
    <div class="newPost" v-show="showtext">
      <span id="newPostTitle">Publier un nouveau post</span>
      <form id="newPostForm">
        <input
          type="text"
          name="titleInput"
          id="titleInput"
          placeholder="Titre du post..."
          v-model.lazy="title"
        />
        <input
          placeholder="Votre post..."
          maxlength="80"
          type="text"
          name="contentInput"
          id="contentInput"
          v-model.lazy="contentPost"
        />
        <span id="buttonAddPost" @click="getNewPost">Ajouter votre Post</span>
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
            :contentPost="element.content"
          >
          </List>
          <div class="main-comment">
            <button @click="showcomment = index">Commenter</button>
            <button @click="addcomment(element._id)">
              Envoyez le commentaire: {{ element.comments.length }}
            </button>
            <textarea
              name=""
              id=""
              cols="20"
              rows="1"
              v-show="showcomment === index"
              v-model="content"
            ></textarea>
            <button @click="addLike(element._id)">
              Like : {{ element.likes.length }}
            </button>
          </div>
          <span>Commentaire:</span>
          <div class="commentsContainer">
            <span
              v-for="(items, index) in element.comments"
              :key="index"
              class="indivComment"
            >
              {{ items.content }}
            </span>
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
      toktok: localStorage.getItem("token"),
      title: "",
      content: "",
      showtext: false,
      showcomment: null,
      Like: 0,
      contentPost: "",
      comments: [],
    };
  },
  //Déclaration des composants et intégration dans le VDOM
  components: {
    Post: Post,
    List: List,
  },
  methods: {
    deconnexion() {
      localStorage.removeItem("token");
      this.$router.push("/");
      alert("Vous avez bien été déconnecté !");
      console.log(this.toktok);
    },
    verifToken() {
      if (!localStorage.getItem("token")) {
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
      const newPost = { title: this.title, content: this.contentPost };
      this.comments = this.newPublication(newPost);
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

    //requete Likes
    async addLike(id) {
      this.verifToken();
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
    //requete comment//
    async addcomment(id) {
      this.verifToken();
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

      if (response.status === 200) {
        this.getPosts();
        this.content = "";
      }
    },
  },

  mounted() {
    this.toktok;
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

/**Container des commentaires */
.commentsContainer {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border: solid 3px;
}

.indivComment {
  background-color: #dbdbdb;
}
</style>
