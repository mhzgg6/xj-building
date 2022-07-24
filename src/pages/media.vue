<script setup lang='ts'>
import list from './test'

const filterItems = ['publication', 'exhibition', 'award', 'lecture', 'all']
  .map(key => ({ label: `media.${key}`, value: key }))

// const log = useDebounceFn(() => {
//   console.log('lg:', unref(isLagerScreen))
//   console.log('md:', unref(isMiddleScreen))
//   console.log('sm:', unref(isSmallScreen))
// }, 200)

// window.onresize = () => log()

</script>


<template>
  <div p-5>
    <section flex justify-end>
      <filter-nav :items="filterItems" />
    </section>
    <!-- <section flex gap-2>
      <div grow flex flex-col gap-2>
        <div bg-red h-13>hh</div>
        <div bg-red h-10>hh</div>
        <div bg-red h-16>hh</div>
        <div bg-red h-11>hh</div>
        <div bg-red h-10>hh</div>
      </div>
      <div grow gap-2 flex-col flex>
        <div bg-red h-12>hh</div>
        <div bg-red h-13>hh</div>
        <div bg-red h-10>hh</div>
        <div bg-red h-15>hh</div>
        <div bg-red h-10>hh</div>
      </div>
      <div grow gap-2 flex-col flex>
        <div bg-red h-20>hh</div>
        <div bg-red h-10>hh</div>
        <div bg-red h-17>hh</div>
        <div bg-red h-10>hh</div>
        <div bg-red h-10>hh</div>
      </div>
      <div grow gap-2 flex-col flex>
        <div bg-red h-19>hh</div>
        <div bg-red h-23>hh</div>
        <div bg-red h-10>hh</div>
        <div bg-red h-12>hh</div>
        <div bg-red h-11>hh</div>
      </div>
    </section> -->

    <water-fall :data-list="list">
      <template v-slot="scope">
        <div p-2>
          {{ scope.data.data.title }}
        </div>
      </template>
    </water-fall>

  </div>
</template>

<style scoped>
</style>
<route lang="yaml">
meta:
  layout: home
</route>
