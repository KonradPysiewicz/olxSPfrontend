<template>
  <div class="row">
    <div class="col-md-3">
    </div>
    <div class="col-md-6">
      <form action="" class="input-group" method="get">
        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg></span>
        <input type="text" class="form-control" placeholder="Znajdź ogłoszenia blisko ciebie!" name="search" >
        <button class="btn bg-light   btn-outline-info" type="submit">Szukaj <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg></button>
      </form>

    </div>
    <div class="col-md-3">
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style scoped>

</style>