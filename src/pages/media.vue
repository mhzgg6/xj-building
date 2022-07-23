<script setup lang='ts'>
import { VueFlexWaterfall } from "vue-flex-waterfall"
import { isLagerScreen, isMiddleScreen, isSmallScreen } from "~/composables/meida";
import list from './test'

const filterItems = ['publication', 'exhibition', 'award', 'lecture', 'all']
  .map(key => ({ label: `media.${key}`, value: key }))

const breakAt = { 1000: 3, 600: 2, 300: 1 }

const log = useDebounceFn(() => {
  console.log('lg:', unref(isLagerScreen))
  console.log('md:', unref(isMiddleScreen))
  console.log('sm:', unref(isSmallScreen))
}, 200)

window.onresize = () => log()

</script>


<template>
  <div p-5>
    <section flex justify-end>
      <filter-nav :items="filterItems" />
    </section>

    <vue-flex-waterfall break-by-container col="4" col-spacing="5" :break-at="breakAt" align-content="space-between">
      <div w-240px p-2 v-for="item in list" :key="item.src">
        {{ item.title }}
      </div>
    </vue-flex-waterfall>
  </div>
</template>

<style scoped>
</style>
<route lang="yaml">
meta:
  layout: home
</route>
