<template>
<nav class="navbar is-info" role="navigation" aria-label="main navigation">
  <div class="container">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item brand-text has-text-weight-bold">Rate My Dog!</router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasic" class="navbar-menu" :class="{ 'is-active': showNav }">
    <div class="navbar-end">
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/register" class="navbar-item">Register</router-link>
    </div>
  </div>
</div>
</nav>
  <router-view/>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
  return {
    showNav: false
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
