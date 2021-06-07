<template>
    <div>
       <div class="input-group" id="searchbox">
            <input type="search" class="form-control rounded" placeholder="Search Pokemon" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary">search</button>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'Search' 
}
</script> 

<style scoped>
#searchbox {
    width: 70%;
    margin: 10px auto;  
}
</style>