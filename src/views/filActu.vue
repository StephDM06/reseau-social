<template>
  <div id="principale">
    <button id="openCreatePost">Post something</button>
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
    <List
      v-for="(element, index) in post" 
      :key="index"
      :lastname="element.lastname"
      :firstname="element.firstname"
      :title="element.title"
      :content="element.content"
    > </List>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import List from "@/components/RecupPost.vue";

const DataPost = {
  data() {
    return {
      post:[],
      //tableau pour stocker nouveau post
      newPostTable: [],
<<<<<<< HEAD
      showtext: ture,
=======
      

>>>>>>> 501202aa4091b0ad808b5c3f47cd313bc67933aa
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
    getNewPost() {
      console.log("coucou");
      if (this.title == "" && this.content == "") {
        return alert("veuillez remplir les champs");
      } else {
        this.newPostTable.push({title:this.title, content:this.content});
        // this.newPostTable.push(this.content);
        this.title = "";
        this.content = "";
        console.log(this.newPostTable);
      }
    },
  },
    async mounted() {
    const Post = await fetch("https://snapi-coyote.osc-fr1.scalingo.io/posts");
    let data = await Post.json();

    this.post = data.posts;
    console.log(this.post);
  },


};

export default DataPost;
</script>
<style scoped>
#principale {
  background-image: url();
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
  border: none;
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
</style>
