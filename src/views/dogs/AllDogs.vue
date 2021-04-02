<template>
  <section class="section all-dogs">
    <div class="container">
        <div class="column is-10 is-offset-1 p-2">
          <h1 class="is-size-4 has-text-weight-semibold mb-3">Dogs</h1>
          <FilterNav @filterChange="currentFilter = $event" :currentFilter="currentFilter" />
          <div v-if="dogs.length" class="columns is-centered is-multiline is-justify-content-space-around">
            <div v-for="dog in filteredDogs" :key="dog.id" class="column is-6">
              <Card :dog="dog" @deletedDog="handleDelete" @toggledPin="handleToggle"/>
            </div>
           </div> 
           <div v-else>
                <h1 class="is-size-4 has-text-weight-semibold mb-3">uh-ho! No dogs yet</h1>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import Card from '../../components/Card.vue'
import FilterNav from '../../components/FilterNav.vue'
export default {
  name: 'AllDogs',
  components: {Card, FilterNav},
  data() {
    return {
      dogs: [],
      currentFilter: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(data => this.dogs = data)
    .catch(err => console.log(err.message))
  },
  methods: {
    handleDelete(id){
    this.dogs = this.dogs.filter((dog) => {
      return dog.id !== id })
    },
    handleToggle(id){
    let toggle = this.dogs.find(dog => {
      return dog.id === id
    })
    toggle.pinned = !toggle.pinned
    }
  },
  computed: {
    filteredDogs(){
      if(this.currentFilter === 'pinned'){
        return this.dogs.filter(dog => dog.pinned)
      }
      if(this.currentFilter === 'notPinned'){
        return this.dogs.filter(dog => !dog.pinned)
      }
      return this.dogs
    }
  }
}
</script>
