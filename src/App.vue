<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './views/Navbar.vue'

export default {
  name: 'Home',
  components: { Navbar },
  data() {
  return {
    }
  }
}

</script>


<style>
body {
  background-color:hsl(0, 0%, 98%);
  height: 100vh;
}
</style>
