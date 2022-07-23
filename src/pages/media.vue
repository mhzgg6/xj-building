<script setup lang='ts'>
const filterItems = ['publication', 'exhibition', 'award', 'lecture', 'all']
  .map(key => ({ label: `media.${key}`, value: key }))
</script>


<template>
  <div p-5>
    <section flex justify-end>
      <filter-nav :items="filterItems" />
    </section>
  </div>
</template>

<style scoped>
</style>
<route lang="yaml">
meta:
  layout: home
</route>
