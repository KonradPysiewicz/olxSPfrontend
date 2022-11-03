<template>
  <div class="container">
    <div class="row mt-3 mb-3">
      <div class="col-md-3 mb-4" v-for="post in posts">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ post.tytul }}</h5>
              <p class="card-text">
                Kategoria: {{ post.kategoria }} <br>
                Lokalizacja: {{ post.lokalizacja }} <br>
                Opis: {{ post.opis }}</p>
              <div class="d-flex justify-content-between">
                <p class = "font-weight-bold position-end mt-2">Cena: {{ post.cena }} </p>
              </div>
              <div class="d-flex justify-content-center">
                  <button @click="removeItem(post.id)" type="submit" class="btn btn-danger top-static mr-2">Usuń</button>
                <button @click ="editPost(post.id)"  class="btn btn-success ms-2">Edytuj</button>
              </div>
            </div>
          </div>
    </div>
  </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "MyOffers",
  data(){
    return{
      posts: []
    }
  },
    async created(){
     axios.get('http://127.0.0.1:8080/api/user_posts/' + localStorage.getItem('id'))
      .then( response => {
        this.posts = response.data
      })
      .catch( error => {
        console.log(error)
      })
    },
    methods:{
      removeItem(id){
        axios.delete('http://127.0.0.1:8080/api/delete_post/' + id)
        .then( response => {
          if (response.status == 200){
            console.log("Pomyślnie usunieto post")
            this.$router.push('/');
          }
        })
        .catch( error => {
          console.log(error)
        })
      },
      editPost(id){
        localStorage.setItem('post_id', id)
        this.$router.push('/edit_post');
      }

    }

}
</script>

<style scoped>

</style>