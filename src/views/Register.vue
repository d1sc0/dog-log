<template>
    <div class="container register">
      <div class="columns mt-6">
        <form @submit.prevent="handleSubmit" class="box column is-half is-offset-one-quarter p-6">
            <h1 class="is-size-4 has-text-weight-semibold">Create Account</h1>
              <div class="field mt-4">
                <label class="label">Email</label>
                <p class="control">
                  <input v-model="emailAddress" class="input" type="email" placeholder="input@email.com" required>
                </p>
              </div>

              <div class="field">
                <label class="label">Create Password</label>
                <p class="control">
                  <input v-model="password1" :class="['input', passwordClass]" type="password" placeholder="Set Password..." @keyup="checkLength" required>
                </p>
                <p class="control mt-3">
                  <input v-model="password2" :class="['input', passwordClass]" type="password" placeholder="Repeat Password..." @keyup="checkMatch" required>
                </p>
                <p v-if="passwordError" class="help is-danger">{{ passwordError }}</p>
              </div>
              
              <div class="field">
                <label class="label">Bio</label>
                <div class="control">
                  <textarea v-model="bio" class="textarea" placeholder="Tell us about yourself"></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input v-model="terms" type="checkbox" required>
                    I agree to the <a @click="toggleTerms">terms and conditions</a>
                  </label>
                </div>
              </div>

              <div class="field is-grouped my-5">
                <div class="control">
                  <button class="button is-link is-rounded">Submit</button>
                </div>
              </div>

        </form>
        <div v-if="showTerms">
          <Modal modalTitle="Terms and Conditions" @close="toggleTerms">
            <slot>
              We won't sell your data! mmmk
            </slot>
          </Modal>
        </div>
      </div>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  name: 'Register',
  components: { Modal },
  data() {
    return { 
      emailAddress: '',
      password1: '',
      password2: '',
      terms: false,
      bio: '',
      showTerms: false,
      passwordError: '',
      passwordClass: ''
    }
  },
  methods: {
    toggleTerms() {
      this.showTerms = !this.showTerms
    },
    checkMatch() {
      // check passwords match
        this.passwordError = this.password1 !== this.password2 ? 'Passwords do not match' : ''
        this.passwordClass = this.password1 !== this.password2 ? 'is-danger' : 'is-success'
    },
    checkLength() {
      // check password length
        this.passwordError = this.password1.length < 8 ? 'Password must be a minimum of 8 characters' : ''
        this.passwordClass = this.password1.length < 8 ? 'is-danger' : 'is-success'
    },
    handleSubmit() {
      if (!this.passwordError){
        console.log('emailAddress:', this.emailAddress)
        console.log('password:', this.password1)
        console.log('bio:', this.bio)
        console.log('accepted terms:', this.terms)
      }
    }
  }
}
</script>

<style>
</style>
