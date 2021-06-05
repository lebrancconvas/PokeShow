<template>
    <div class="container">
       <div class="row align-items-start">
            <div class="card col" style="width: 18rem;">
                <img src="@/assets/bulbasaur.png" type="image/png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Bulbasaur</h5>
                    <p class="card-text">The Grass Type Starter Pokemon in the first generation.</p>
                    <DetailButton />
                </div>
            </div> 
            <div class="card col" style="width: 18rem;">
                <img src="@/assets/charmander.png" type="image/png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Charmander</h5>
                    <p class="card-text">The Fire Type Starter Pokemon in the first generation.</p>
                    <DetailButton />
                </div>
            </div> 
            <div class="card col" style="width: 18rem;">
                <img src="@/assets/squirtle.png" type="image/png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Squirtle</h5>
                    <p class="card-text">The Water Type Starter Pokemon in the first generation.</p>
                    <DetailButton />
                </div>
            </div> 
       </div>
    </div>
</template>

<script>
// import {useStore} from 'vue'
// import Axios from 'axios'
import DetailButton from '@/components/DetailButton.vue'
export default {
    name: "PokeCard",
    // setup() {
    //     const store = useStore()
    //     let showdata = () => {
    //         store.dispatch('changeData')
    //     }
    //     return {showdata}
    // },
    components: {
        DetailButton 
    }
}
</script>

<style scoped>
</style>