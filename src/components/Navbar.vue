<template>
 <nav class="navbar is-info" role="navigation" aria-label="main navigation">
   <div class="container">
    <div class="navbar-brand">
     <router-link :to="{ name: 'Home' }" class="navbar-item brand-text has-text-weight-bold">Rate My Dog!</router-link>
       <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
       </a>
      </div>
    <div id="navbarBasic" class="navbar-menu" :class="{ 'is-active': showNav }">
     <div class="navbar-end">
         <router-link :to="{ name: 'AllDogs' }" class="navbar-item">All Dogs</router-link>
         <router-link :to="{ name: 'About' }" class="navbar-item">About</router-link>
         <router-link :to="{ name: 'AddDog' }" class="navbar-item">Add Dog</router-link>
         <router-link :to="{ name: 'Register' }" class="navbar-item">Register</router-link>
     </div>
    </div>
   </div>
 </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
  return {
    showNav: false
    }
  }
}
</script>


<style>
</style>