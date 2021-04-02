<template>
 <article class="media box m-1">
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
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
  <div class="media-right">
    <button class="delete"></button>
  </div>
</article>
</template>

<script>
export default {
  name: 'Dog',
  components: {},
  props: ['id'],
  data() {
    return {
      dog: []
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

