<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Add Pokemon
        </button>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Add Pokemon</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Name</label>
                      <input type="text" class="form-control" v-model="pokemonname" id="exampleFormControlInput1" placeholder="Enter Your Pokemon Name.">
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                      <textarea class="form-control" v-model="pokemondescription" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" @click="confirmadd">Confirm</button>
                </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: "AddPokemon",
    setup() {
        let pokemonname = ref("")
        let pokemondescription = ref("")
        let confirmadd = () => {
            console.log(`${pokemonname.value}\n${pokemondescription.value}`)
        }
        return {pokemonname, pokemondescription, confirmadd}
    }
}
</script>

<style scoped>

</style>