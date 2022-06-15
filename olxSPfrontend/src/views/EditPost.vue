<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 ml-4 mb-4">
        <h1 class="font-weight-bold mt-4 mb-4">Edytuj ogłoszenie</h1>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <p class="font-weight-bold">Im więcej szczegółów, tym lepiej!</p>
            <label>Tytuł ogłoszenia*</label>
            <input type="text" class="form-control mb-3" id="tytul" name="tytul" v-model="post.tytul" aria-describedby="emailHelp" placeholder="np. iPhone 11 na gwarancji" required>

            <label>Cena</label>
            <input type="text" class="form-control mb-3" id="cena" name="cena" v-model="post.cena" aria-describedby="emailHelp" required>

            <label>Kategoria</label>


            <div class="input-group mb-3">
              <select class="form-select" id="kategoria" v-model="post.kategoria" required>
                <option selected>{{post.kategoria}}</option>
                <option value="Motoryzacja">Motoryzacja</option>
                <option value="Nieruchomości">Nieruchomości</option>
                <option value="Dom i Ogród">Dom i Ogród</option>
                <option value="Elektronika">Elektronika</option>
                <option value="Moda">Moda</option>
                <option value="Rolnictwo">Rolnictwo</option>
                <option value="Zwierzęta">Zwierzęta</option>
                <option value="Dla Dzieci">Dla Dzieci</option>
                <option value="Sport i Hobby">Sport i Hobby</option>
                <option value="Muzyka i Edukacja">Muzyka i Edukacja</option>
                <option value="Usługi i Firmy">Usługi i Firmy</option>
                <option value="Ślub i Wesele">Ślub i Wesele</option>
                <option value="Oddam za darmo">Oddam za darmo</option>
                <option value="Zamienię">Zamienię</option>
                <option value="Praca w sprzedaży">Praca w sprzedaży</option>
                <option value="Wynajem budowa">Wynajem budowa</option>
                <option value="Piękny ogród">Piękny ogród</option>
              </select>
            </div>

            <label>Lokalizacja</label>
            <br>
            <div class="input-group mb-3">
              <select class="form-select" id="lokalizacja" v-model="post.lokalizacja" required>
                <option selected>{{post.lokalizacja}}</option>
                <option value="Dolnośląskie">Dolnośląskie</option>
                <option value="Kujawsko-pomorskie">Kujawsko-pomorskie</option>
                <option value="Lubelskie">Lubelskie</option>
                <option value="Lubuskie">Lubuskie</option>
                <option value="Łódzkie">Łódzkie</option>
                <option value="Małopolskie">Małopolskie</option>
                <option value="Mazowieckie">Mazowieckie</option>
                <option value="Opolskie">Opolskie</option>
                <option value="Podkarpackie">Podkarpackie</option>
                <option value="Podlaskie">Podlaskie</option>
                <option value="Pomorskie">Pomorskie</option>
                <option value="Śląskie">Śląskie</option>
                <option value="Świętokrzyskie">Świętokrzyskie</option>
                <option value="Warmińsko-mazurskie">Warmińsko-mazurskie</option>
                <option value="Wielkopolskie">Wielkopolskie</option>
                <option value="Zachodniopomorskie">Zachodniopomorskie</option>

              </select>
            </div>
            <label>Opis</label>
            <textarea class="form-control" aria-label="With textarea" id="opis" v-model="post.opis"></textarea>
            <button class="btn border-primary mt-4" type="submit">Edytuj ogłoszenie</button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-2">
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      post: '',
      tytul: '',
      opis: '',
      cena: '',
      kategoria: '',
      lokalizacja: '',
    }
  },
  name: "EditOffer",
  async created(){
    axios.get('http://127.0.0.1:8000/api/post/' + localStorage.getItem('post_id'))
        .then( response => {
          this.post = response.data
        })
        .catch( error => {
          console.log(error)
        })
  },
  methods: {
    async handleSubmit(){
      console.log(this.post.tytul, this.post.opis, this.post.lokalizacja)
      const response = await axios.put('http://127.0.0.1:8000/api/edit_post', {
        id: localStorage.getItem('post_id'),
        tytul: this.post.tytul,
        opis: this.post.opis,
        cena: this.post.cena,
        kategoria: this.post.kategoria,
        lokalizacja: this.post.lokalizacja,
      })
      console.log(response)
      alert('Ogłoszenie edytowane pomyślnie');
      this.$router.push('/my_offers');
      localStorage.removeItem('post_id')
    }
  }
}
</script>
