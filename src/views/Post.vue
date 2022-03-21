

<template>
    <div class="postContainer">
        <div id="post">
          <span>{{user}}</span>
          <span>{{date}}</span>
          <span class="buttonLike">like</span>
    </div>
</template>


<script>

    const Post = {
        data(){
            return{
                postsTableau:[],
                userName: "",
                postDate: "",
            };
            
        },

        props: {
        like: Number,
        user: String,
        date: Date,
  },

    };

export default Post;
</script>

<style scoped>

</style>