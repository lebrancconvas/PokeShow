<template>
    <div>
       <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">More Details</button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Pokemon Information</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
               Name: {{$store.getters.getData}} 
            </div>
            <!-- <button type="button" class="btn btn-primary">Change</button> -->
        </div> 
    </div>
</template>

<script>
// import {useStore} from 'vue'
export default {
    name: "DetailButton",
    // setup() {
    //     const store = useStore()
    //     let formchange = () => {
    //         store.dispatch('changeData')
    //     }
    //     return {formchange}
    // }
}
</script>

<style scoped>

</style>