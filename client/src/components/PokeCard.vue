<template>
    <div class="container">
       <div class="row align-items-start">
            <div class="card col" style="width: 18rem;">
                <img src="@/assets/bulbasaur.png" type="image/png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Bulbasaur</h5>
                    <p class="card-text">The Grass Type Starter Pokemon in the first generation.</p>
                    <a href="#" class="btn btn-primary">More Detail</a>
                </div>
            </div> 
            <div class="card col" style="width: 18rem;">
                <img src="@/assets/charmander.png" type="image/png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Charmander</h5>
                    <p class="card-text">The Fire Type Starter Pokemon in the first generation.</p>
                    <a @click="datasend" class="btn btn-primary">More Detail</a>
                </div>
            </div> 
            <div class="card col" style="width: 18rem;">
                <img src="@/assets/squirtle.png" type="image/png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Squirtle</h5>
                    <p class="card-text">The Water Type Starter Pokemon in the first generation.</p>
                    <a href="#" class="btn btn-primary">More Detail</a>
                </div>
            </div> 
       </div>
    </div>
</template>

<script>
export default {
    name: "PokeCard",
    setup() {
        let datasend = () => {
            console.log(`Charizard`)
        }
        return {datasend}
    }
}
</script>

<style scoped>
</style>