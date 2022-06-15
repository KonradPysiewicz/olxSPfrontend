<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import HomePagePreFooter from "@/components/HomePagePreFooter.vue";
</script>


<template>

  <div class="container-fluid d-flex justify-content-center">
    <div class="col-7 mt-3 mb-3">
        <div class="row d-flex justify-content-between" v-for="[key,post] in Object.entries(posts)" :key="post">
          <h4 class="mb-2" v-if="Object.keys(post).length"> Oferty użytkownika: {{ key }} </h4>
                    <div class="card col-5 mb-4 mx-1" v-for="element in post" :key="element.id">
                      <div class="card-body">
                        <h5 class="card-title">{{ element.tytul }}</h5>
                        <p class="card-text">
<!--                          Kategoria: {{ element.kategoria }} <br>-->
<!--                          Lokalizacja: {{ element.lokalizacja }} <br>-->
                          Opis: {{ element.opis }}</p>
                        <div class="d-flex justify-content-between">
                          <p class = "font-weight-bold position-end mt-2">Cena: {{ element.cena }} </p>
                        </div>
                        <div class="d-flex justify-content-center">
                          <button @click="showPost(element.id)" class="btn btn-primary ms-2">Pokaż szczegóły</button>
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
    axios.get('http://127.0.0.1:8000/api/get_posts')
        .then( response => {
          this.posts = response.data
          console.log(this.posts)
        })
        .catch( error => {
          console.log(error)
        })
  },
  methods:{
    showPost(id){
      localStorage.setItem('post_id_show', id)
      this.$router.push('/show_post');
    }
  }
}

</script>
