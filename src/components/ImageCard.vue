<script setup lang='ts'>
// import { PropType } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const dynamicWidth = $computed(() => {
  const lg = unref(isLagerScreen)
  const md = unref(isMiddleScreen)
  let width = 50

  if(md) {
    width = 100 * (1 / 3)
  }

  if(lg) {
    width = 25
  }

  return `${width}%`
})

</script>

<template>
  <div p-2 class="image-card">
    {{ props.title }}
  </div>
</template>


<style scoped>
.image-card {
  width: v-bind(dynamicWidth);
}
</style>
