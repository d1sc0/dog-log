<template>
  <section class="section edit-dog">
    <div class="container">
      <div class="columns">
        <form @submit.prevent="handleSubmit" class="box column is-half is-offset-one-quarter p-6">
            <h1 class="is-size-4 has-text-weight-semibold">Edit Dog</h1>
              <div class="field mt-4">
                <label class="label">Name</label>
                <p class="control">
                  <input v-model="dogName" class="input" type="dogname" placeholder="Misty" required>
                </p>
              </div>

              <div class="field">
                <label class="label">Breed</label>
                <p class="control">
                  <input v-model="breed" class="input" type="breed" placeholder="Cockerpoo" required>
                </p>
              </div>

              <div class="field">
                <label class="label">Gender</label>
                <div class="control">
                  <div class="select">
                    <select v-model="gender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                <label class="label">Bio</label>
                <div class="control">
                  <textarea v-model="bio" class="textarea" placeholder="Tell us about your hound"></textarea>
                </div>
              </div>

              <div class="field is-grouped my-5">
                <div class="control">
                  <button class="button is-link is-rounded">Update Dog</button>
                </div>
              </div>
        </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'EditDog',
  props: ['id'],
  data() {
    return { 
      uri: 'http://localhost:3000/dogs/' + this.id,
      dogName: '',
      bio: '',
      gender: '',
      breed: '',
    }
  },
  mounted() {
     fetch(this.uri)
     .then(res => res.json())
     .then(data => {
        this.dogName = data.name
        this.breed = data.breed
        this.gender = data.gender
        this.bio = data.bio
        })
  },
  methods: {
    handleSubmit() {
      let updatedDog = {
        name: this.dogName,
        breed: this.breed,
        gender: this.gender,
        bio: this.bio
      }
    fetch(this.uri, { method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedDog)
      })
    .then(
      this.$router.push({ name: 'AllDogs' })
    )
    .catch(err => console.log(err.message))
    }
  }
}
</script>

<style>
</style>
