<template>
  <nav class="navbar navbar-expand navbar-light bg-primary">
    <div class="container">
      <router-link to ="/" class="navbar-brand p-3"><h2>OLX</h2></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <form class="d-flex">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav nav justify-content-end  me-auto mb-2 mb-lg-0">
            <li>

              <div v-if="!isSetToken" class="btn-group" type="button" aria-haspopup="true" aria-expanded="false">
                <router-link to="/login" class="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg> MóJ OLX</router-link>
              </div>

              <div v-if="isSetToken" class="btn-group" type="button" aria-haspopup="true" aria-expanded="false">
                <router-link to="/my_offers" class="nav-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg> MóJ OLX</router-link>
              </div>

            </li>

          </ul>
          <router-link to ="/add_post" v-if="isSetToken" class="btn bg-light py-2 px-3 ml-3 btn-outline-info">Dodaj ogłoszenie</router-link>
          <a href="/" v-if="isSetToken" @click="wyloguj()" class="btn bg-light py-2 px-3 ml-3 btn-outline-info">Wyloguj</a>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Navbar",
  data(){
    return {
      token: localStorage.getItem('token')
    }
  },
  setup(){
    const store = useStore()
    const isSetToken = computed(() => store.getters.tokenIsSet)
    return {isSetToken}
  },

  methods:{
    wyloguj(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('user');
    }
    },

  }
</script>

<style scoped>

</style>