<template>
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title is-size-5">{{ modalTitle }}</p>
      <button class="delete" aria-label="close" @click="fireEvent"></button>
    </header>
    <section class="modal-card-body">
      <slot></slot>
    </section>
    <footer class="modal-card-foot">
      <!-- <button class="button is-success">Save changes</button> -->
      <button class="button" @click="fireEvent">Close</button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['modalTitle'],
  methods:{
    fireEvent(){
      this.$emit('close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
