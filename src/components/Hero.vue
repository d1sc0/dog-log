<template>
<div :class="['hero', herostyle]">
    <div class="hero-body">
      <p class="title">
        <slot name="heroTitle"></slot>
      </p>
      <p class="subtitle">
        <slot name="heroSubtitle"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: ['herostyle'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
