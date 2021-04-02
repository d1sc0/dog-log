<template>
  <section class="section all-dogs">
    <div class="container">
        <div class="column is-10 is-offset-1 p-2">
          <h1 class="is-size-4 has-text-weight-semibold mb-3">All Dogs</h1>
          <div class="columns is-centered is-multiline is-justify-content-space-around">
            <div v-for="dog in dogs" :key="dog.id" class="column is-6">
              <Dog :id="dog.id"/>
            </div>
           </div> 
              <!-- <router-link :to="{ name: 'DogDetail', 
              params: { id: dog.id, name: dog.name }}">
                {{ dog.id}}: {{ dog.name }}
              </router-link> -->
        </div>
      </div>
  </section>
</template>

<script>
import Dog from '../../components/Dog.vue'
export default {
  name: 'AllDogs',
  components: {Dog},
  data() {
    return {
      dogs: [
      ]
    }
  },
  mounted() {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(data => this.dogs = data)
    .catch(err => console.log(err.message))
  }
}
</script>
