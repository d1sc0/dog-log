<template>
  <section class="section add-dog">
    <div class="container">
      <div class="columns">
        <form @submit.prevent="handleSubmit" class="box column is-half is-offset-one-quarter p-6">
            <h1 class="is-size-4 has-text-weight-semibold">Add Dog</h1>
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
                  <button class="button is-link is-rounded">Add Dog</button>
                </div>
              </div>
        </form>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'AddDog',
  data() {
    return { 
      dogName: '',
      bio: '',
      gender: '',
      breed: '',
    }
  },
  methods: {
    handleSubmit() {
      let dog = {
        name: this.dogName,
        breed: this.breed,
        gender: this.gender,
        bio: this.bio,
        pinned: false
      }
      fetch('http://localhost:3000/dogs', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dog)
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
