<template>
  <div class="container">
    <div class="row mt-3 mb-3">
      <div class="col-md-6 mb-4">
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
</template>

<script>
import axios from "axios";

export default {
  name: "ShowPost",
  data(){
    return {
      post: ''
    }
  },
  async created(){
    axios.get('http://127.0.0.1:8080/api/post/' + localStorage.getItem('post_id_show'))
        .then( response => {
          this.post = response.data
        })
        .catch( error => {
          console.log(error)
        })
  },
}
</script>
