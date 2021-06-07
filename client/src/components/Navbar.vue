<template>
    <div>
        <nav class="navbar navbar-danger bg-danger">
            <div class="container-fluid">
                <router-link to="/">
                    <div class="navbar-brand text-white">PokeShow</div>
                </router-link>
                <router-link to="/about">
                    <div class="navbar-brand text-white">Profile</div> 
                </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
nav {
    position: sticky;
    z-index: 100;
    top: 0;
    width: 100%;
} 
</style>