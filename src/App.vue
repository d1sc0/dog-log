<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue'

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
@import './assets/styles.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';

body {
  background-color:hsl(0, 0%, 98%);
  height: 100vh;
}
</style>
