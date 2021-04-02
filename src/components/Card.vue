<template>
 <article class="media box m-1" :class="{ [pinnedClass] : dog.pinned }">
  <figure class="media-left">
    <p class="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>{{dog.name}}</strong> <small>| {{dog.breed}}</small> <small>| {{dog.gender}}</small>
        <br>
        {{dog.bio}}
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <router-link :to="{ name: 'EditDog', params: {id: dog.id}}" class="level-item">
          <span class="icon is-small"><i class="fas fa-pencil-alt"></i></span>
        </router-link>
        <a class="level-item" @click="deleteDog">
          <span class="icon is-small"><i class="fas fa-trash"></i></span>
        </a>
        <a class="level-item" @click="togglePin">
          <span class="icon is-small"><i class="fas fa-thumbtack"></i></span>
        </a>
      </div>
    </nav>
  </div>
</article>
</template>

<script>
export default {
  name: 'Card',
  components: {},
  props: ['dog'],
  data() {
    return {
     uri: 'http://localhost:3000/dogs/' + this.dog.id,
     pinnedClass: 'has-background-warning'
    }
  },
  methods: {
   deleteDog(){
     fetch(this.uri, { method: 'DELETE' })
    .then(() => this.$emit('deletedDog', this.dog.id))
    .catch(err => console.log(err.message))
   },
   togglePin(){
     fetch(this.uri, { 
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pinned: !this.dog.pinned })
      })
    .then(() => this.$emit('toggledPin', this.dog.id))
    .catch(err => console.log(err.message))
   },
  }
}
</script>

