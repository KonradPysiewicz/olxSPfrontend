<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import HomePagePreFooter from "@/components/HomePagePreFooter.vue";
</script>


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
          </div>
        </div>
      </div>
    </div>
  </div>
  <HomePagePreFooter></HomePagePreFooter>
</template>

<script>
import axios from "axios";

export default{
  name: "HomeView",
  data(){
    return{
      posts: []
    }
  },
  async created(){
    axios.get('http://127.0.0.1:8000/api/get_all_posts')
        .then( response => {
          this.posts = response.data
        })
        .catch( error => {
          console.log(error)
        })
  },
}

</script>
