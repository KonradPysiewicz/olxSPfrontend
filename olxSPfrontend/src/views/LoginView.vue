<template>
  <div class="container mt-5">
    <div class="row"><!-- start row -->
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h3 class="mb-4">Logowanie</h3>
        <form @submit.prevent="submit(email, password)">
          <!-- Email input -->
          <div class="form-outline mb-4 ">
            <input type="email" id="form2Example1" class="form-control" v-model="email" placeholder="email@email.com"/>
            <label class="form-label" for="form2Example1">Email address</label>
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

import axios from "axios";
import {useStore} from "vuex";
export default {
  name: "LoginView",
  data(){
    return{
      email: '',
      password: ''
    }
  },
  setup(){
    const store = useStore()
    const submit = (email, password) => store.dispatch("handleSubmit", {email: email, password: password});
    return {submit}
  },
  // methods: {
  //   async handleSubmit(){
  //     const response = await axios.post('http://127.0.0.1:8000/api/login', {
  //       email: this.email,
  //       password: this.password
  //     })
  //     localStorage.setItem('token',response.data.token);
  //     localStorage.setItem('id',response.data.tokeninfo.tokenable_id);
  //     localStorage.setItem('user',JSON.stringify(response.data.user));
  //     // window.location.reload();
  //     this.$router.push('/');
  //
  //
  //
  //     // this.$router.push({
  //     //   name: 'home',
  //     // });
  //     // window.location.reload();
  //   }
  // }
}
</script>

<style scoped>

</style>