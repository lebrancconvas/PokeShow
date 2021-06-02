<template>
  <div class="home">
    <div>{{pokemonname}}</div>
  </div>
</template>

<script>
import {ref} from 'vue'
import Axios from 'axios'
export default {
  name: 'Home',
  setup() {
    let pokemonname = ref("")
    Axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(res => {
      pokemonname = res.data.form[0] 
    })
    return {pokemonname}
  }
}
</script>
