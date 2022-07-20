<script setup>
const { t } = useI18n()
const getAssetsImages = (name, type) => {
  return new URL(`/src/imgs/${name}.${type}`, import.meta.url).href
}
// const imgs = [
//   getAssetsImages('blue', 'jpg'),
//   getAssetsImages('xj', 'png'),
// ]

// const times = reactive([2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, '按时间'])
const times = ref([2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, '按时间'])
// const projects = reactive([
//   {
//     time: 2020,
//     name: '像个利拉',
//     img: getAssetsImages('blue', 'jpg'),
//   },
//   {
//     time: 2020,
//     name: '像个利拉',
//     img: getAssetsImages('xj', 'png'),
//   }
// ])
</script>

<template>
  <div
    flex
    max-w-1180px
    ma-a
    pl-20px
    pr-20px
    text-14px
  >
    <!-- <a
      class="color-#aaa"
      inline-block
      ml-12px
      mr-12px
      v-top
      v-for="time in times"
      :key="time"
    >
      {{ time }}
    </a> -->
  </div>

  <div
    flex
    max-w-1180px
    ma-a
    pl-20px
    pr-20px
  >
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
