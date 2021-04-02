<template>
  <section class="section about">
    <div class="container">
      <div class="columns">
        <div v-if="dog" class="box column is-10 is-offset-1 p-6">
          <h1 class="is-size-4 has-text-weight-semibold mb-3">{{ dog.name }}</h1>
            <h2 class="is-size-6 has-text-weight-semibold mb-3">{{ dog.breed }}</h2>
            <h2 class="is-size-6 has-text-weight-semibold mb-3">{{ dog.gender }}</h2>
            <h2 class="is-size-6 has-text-weight-semibold mb-3">{{ dog.bio }}</h2>
        </div>
        <div v-else class="box column is-10 is-offset-1 p-6">
          <h1 class="is-size-4 has-text-weight-semibold mb-3">...loading</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DogDetail',
  components: {},
  props: ['id'],
  data() {
    return {
      dog: null
    }
  },
  mounted(){
     fetch('http://localhost:3000/dogs/' + this.id)
    .then(res => res.json())
    .then(data => this.dog = data)
    .catch(err => console.log(err.message))
  }
}
</script>
