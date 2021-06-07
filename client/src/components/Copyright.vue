<template>
    <div>
       <footer class="bg-dark text-center text-lg-start">
            <!-- Copyright -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2021 Copyright:
                <div class="text-white">
                    PokeShow by <a href="https://github.com/lebrancconvas">lebrancconvas</a> 
                </div>
            </div>
            <!-- Copyright -->
        </footer> 
    </div>
</template>

<script>
export default {
    name: "Copyright" 
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: black;
  color: white; 
}
</style>