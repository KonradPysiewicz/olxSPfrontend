<template>

  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 ml-4 mb-4">
        <h1 class="font-weight-bold mt-4 mb-4">Dodaj ogłoszenie</h1>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <p class="font-weight-bold">Im więcej szczegółów, tym lepiej!</p>
            <label>Tytuł ogłoszenia*</label>
            <input type="text" class="form-control mb-3" id="tytul" v-model="tytul" aria-describedby="emailHelp" placeholder="np. iPhone 11 na gwarancji" required>

            <label>Cena</label>
            <input type="text" class="form-control mb-3" id="cena" v-model="cena" aria-describedby="emailHelp" required>

            <label>Kategoria</label>

            <div class="input-group mb-3">
              <select class="form-select" id="kategoria" v-model="kategoria">
                <option selected>Brak kategorii</option>
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
              <select class="form-select" id="lokalizacja" v-model="lokalizacja" required>
                <option selected>Brak lokalizacji</option>
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
            <textarea class="form-control" aria-label="With textarea" id="opis" v-model="opis" required></textarea>
            <button class="btn border-primary mt-4" type="submit">Dodaj ogłoszenie</button>
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
  name: "AddPost",
  data(){
    return{
      userId: '',
      tytul: '',
      opis: '',
      cena: '',
      kategoria: '',
      lokalizacja: '',
    }
  },
  methods: {
    async handleSubmit(){
      const response = await axios.post('http://127.0.0.1:8080/api/create_post', {
        userId: localStorage.getItem('id'),
        tytul: this.tytul,
        opis: this.opis,
        cena: this.cena,
        kategoria: this.kategoria,
        lokalizacja: this.lokalizacja,
      })
      alert('Ogłoszenie stworzone pomyślnie');
      this.$router.push('/my_offers');
    }
  }
}
</script>

