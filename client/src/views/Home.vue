<template>
  <div class="home">
    <h1>PokeShow</h1>
    <hr><br>
    <Search />
    <br><br> 
    <PokeCard />
    <br>
    <AddPokemon />
    <br><br><br><br><br> 
  </div>
</template>

<script>
import PokeCard from '@/components/PokeCard.vue'
import AddPokemon from '@/components/AddPokemon.vue'
import Search from '@/components/Search.vue'
export default {
  name: "Home",
  components: {
    PokeCard,
    AddPokemon,
    Search
  }
}
</script>

<style scoped>
h1 {
  margin: 20px auto;
}
hr {
  width: 50%;
  margin: 0 auto;
}
</style>