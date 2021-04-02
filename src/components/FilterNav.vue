<template>
 <div class="buttons">
  <button @click="updateFilter('all')" class="button" :class="{ ['is-active'] : currentFilter === 'all' }">All</button>
  <button @click="updateFilter('pinned')" class="button" :class="{ ['is-active'] : currentFilter === 'pinned' }">Pinned</button>
  <button @click="updateFilter('notPinned')" class="button" :class="{ ['is-active'] : currentFilter === 'notPinned' }">Not Pinned</button>
</div>
</template>

<script>
export default {
 name: 'FilterNav',
 props: ['currentFilter'],
 methods: {
  updateFilter(by){
   this.$emit('filterChange', by)
  }
 } 
  
}
</script>