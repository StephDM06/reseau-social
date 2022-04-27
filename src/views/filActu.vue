<template>
  <div id="principale">
    <div id="topButtonsContainer">
      <button
        id="openCreatePost"
        @click="verifToken() ? (showtext = !showtext) : ''"
      >
        Pour s'exprimer, c'est par ici
      </button>
      <input
        id="submitButton"
        type="submit"
        @click="deconnexion"
        value="Déconnexion"
      />
    </div>
    <!--form pour creation nouveau post -->
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
          maxlength="255"
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
          <div id="comments">
            <button
              class="buttonComment"
              @click="
                showbutton = !showbutton;
                showcomment = index;
              "
            >
              commenter (déjà {{ element.comments.length }} commentaires)
            </button>
            <div v-show="showbutton" class="main-comment">
              <div id="dispo">
                <textarea
                  name=""
                  id=""
                  cols="255"
                  rows="1"
                  v-show="showcomment === index"
                  v-model="content"
                ></textarea>
                <div>
                  <button
                    class="buttonPoster"
                    @click="addcomment(element._id)"
                    v-show="showbutton"
                  >
                    poster le commentaire
                  </button>
                </div>
              </div>
            </div>

            <button class="buttonLike" @click="addLike(element._id)">
              <img src="../img/like.png" alt="" /> {{ element.likes.length }}
            </button>
            <div id="comments">
              <span id="spanCommentaire">Commentaire(s):</span>
              <div class="commentsContainer">
                <span
                  v-for="(items, index) in element.comments"
                  :key="index"
                  :nom="firstname"
                  :prenom="lastaname"
                  class="indivComment"
                >
                  {{ items.content }} par <i>{{lastaname}} {{firstname}}</i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import List from "@/components/RecupPost.vue";
import ProfilDonnees from "./Profil.vue";

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
      showbutton: false,
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
    ProfilDonnees: ProfilDonnees,
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
      this.verifToken();
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
textarea {
  height: 65px;
  width: 200px;
}
template {
  font-family: lato;
}
#principale {
  font-family: lato;
  text-align: center;
  text-align: -webkit-center;
  background-color: #e8fffd;
}
#topButtonsContainer {
  display: flex;
  gap: 2rem;
  place-content: flex-end;
  width: 87%;
}

#submitButton {
  cursor: pointer;
  background-color: #239991;
  padding: 0.5rem;
  border-radius: 5%;
  border: none;
  margin-top: 1rem;
}
/* Style form new post*/
.newPost {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  margin-bottom: 10%;
  align-items: center;
  border: solid 5px #2fccc2;
  width: 80vw;
  padding: 1rem;
}
#dispo {
  display: block;
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
#spanCommentaire {
  margin-top: 3%;
  margin-bottom: 3%;
}
#contentInput {
  width: 100%;
}

#buttonAddPost {
  border: none;
  background-color: #2fccc2;
  border-radius: 15%;
  cursor: pointer;
  padding: 0.5rem;
}

#newPostTitle {
  font-size: 2rem;
  width: 20%;
  text-transform: capitalize;
  border-bottom: solid 3px #2fccc2;
}

#openCreatePost {
  cursor: pointer;
  background-color: #239991;
  padding: 0.5rem;
  border-radius: 5%;
  border: none;
  margin-top: 1rem;
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
  width: 60%;
  background-color: #e7fffd;
}
.mainPostsContainer {
  display: flex;
  justify-content: center;

  background: linear-gradient(#2fccc2, #cde6e5);
  margin-top: 1rem;
}
.main-comment {
  display: flex;
  /* flex-wrap: wrap; */
  gap: 2rem;
  margin: 0rem 0rem 4rem 0rem;
  justify-content: space-around;
  width: 60%;
}

/**Container des commentaires */
.commentsContainer {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.liste {
  background-color: #2fccc2;
}

#spanCommentaire {
  color: #00857d;
}

.indivComment {
  color: #004641;
  background-color: #bee5e4;
}
#indivPost {
  background-color: #e7fffd;
  border: solid 3px #00857d;
  width: 80%;
  border-radius: 7px;
}

/**Style Buttons commenter poster et like*/
.buttonComment {
  border: none;
  background-color: #c7f1ef;
  color: #00857d;
  border-radius: 10%;
  cursor: pointer;
  margin-bottom: 3%;
}

.buttonPoster {
  border: none;
  background-color: #c7ecea;
  color: #00857d;
  border-radius: 10%;
  cursor: pointer;
}

.buttonLike {
  border: none;
  color: #004641;
  background-color: #bff3f0;
  border-radius: 20%;
  cursor: pointer;
}
.buttonLike img {
  width: 30px;
  height: 30px;
}
</style>
