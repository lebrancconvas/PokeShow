<template>
  <div class="home">
    <Navbar />
    <h1>PokeShow</h1>
    <hr><br>
    <PokeCard />
    <br>
    <AddPokemon />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import PokeCard from '@/components/PokeCard.vue'
import AddPokemon from '@/components/AddPokemon.vue'
export default {
  name: "Home",
  components: {
    Navbar,
    PokeCard,
    AddPokemon
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