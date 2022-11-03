<template>
  <div class="container mt-5">
    <div class="row"><!-- start row -->
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h3 class="mb-4">Rejestracja</h3>
        <form @submit.prevent="handleSubmit">
          <!-- Username input -->
          <div class="form-outline mb-2 ">
            <input type="text" id="inputUsername" class="form-control" v-model="username"
                   placeholder="Wpisz swoją nazwę"/>
            <label class="form-label" for="inputUsername">Nazwa użytkownika</label>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-2 ">
            <input type="email" id="inputEmail" class="form-control" v-model="email" placeholder="email@email.com"/>
            <label class="form-label" for="inputEmail">Adres e-mail</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-2">
            <input type="password" id="inputPassword" class="form-control" v-model="password" placeholder="*******"/>
            <label class="form-label" for="inputPassword">Hasło</label>
          </div>

          <div class="form-outline mb-2">
            <input type="password" id="inputPasswordRepeat" class="form-control" placeholder="*******"/>
            <label class="form-label" for="inputPassword">Powtórz hasło</label>
          </div>

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4 ">Zarejestruj</button>
          <router-link to="/login" class="btn btn-primary btn-block mb-4 ms-1">Zaloguj</router-link>
        </form>
      </div>
      <div class="col-md-4"></div>
    </div><!-- end row -->
  </div>
</template>

<script>
import axios from "../axios/axios.js"

export default {
  name: "RegisterView",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      // password_confirm: ''
    }
  },
  methods: {

    async handleSubmit() {
      // try {
        await axios.post('api/register', {
          username: this.username,
          email: this.email,
          password: this.password,
          // password_confirm: this.password_confirm
        }).then(response => {
          console.log(response.data)
          this.$router.push('/login');
        })
            .catch(error => {console.log(error)});
    }
  }
}
</script>