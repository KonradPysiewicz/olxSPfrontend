<template>
  <div class="container mt-5">
    <div class="row"><!-- start row -->
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h3 class="mb-4">Logowanie</h3>
        <form @submit.prevent="submit(username, password)">
          <!-- Email input -->
          <div class="form-outline mb-4 ">
            <input type="text" id="form2Example1" class="form-control" v-model="username" placeholder="Your username"/>
            <label class="form-label" for="form2Example1">Username</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" v-model="password" placeholder="*******"/>
            <label class="form-label" for="form2Example2">Password</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4 ">Zaloguj</button>
          <router-link to ="/register" class="btn btn-primary btn-block mb-4 ms-1">Zarejestruj</router-link>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div><!-- end row -->
  </div>
</template>

<script>

import {useStore} from "vuex";
export default {
  name: "LoginView",
  data(){
    return{
      username: '',
      password: ''
    }
  },
  setup(){
    const store = useStore()
    const submit = (username, password) => store.dispatch("handleSubmit", {username: username, password: password});
    return {submit}
  },
}
</script>

<style scoped>

</style>