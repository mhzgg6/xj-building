<script setup lang='ts'>
import { PropType } from 'vue';
import { currentScreen } from '~/composables/media';


const props = defineProps({
  dataList: {
    type: Array as PropType<Array<any>>,
    default: []
  },
  gap: {
    type: Number,
    default: 2
  }
})

const col = $computed(() => {
  const screen = unref(currentScreen)
  switch (screen) {
    case 'lg':
      return 4
    case 'md':
      return 3
    case 'sm':
      return 2
  }
})

interface ColumnItem {
  data: any
  order: number,
  key: string
}

const columns: Array<Array<ColumnItem>> = $computed(() => {
  const list: Array<Array<ColumnItem>> = Array.from(new Array(col), () => [])
  const data = props.dataList || []
  for (let i = 0, len = data.length; i < len; i++) {
    const pushIndex = i % col
    list[pushIndex].push({ data: data[i], order: pushIndex, key: `${pushIndex}-${i}` })
  }
  return list
})

const gapRem = `${props.gap}rem`

const columnWidth = $computed(() => {
  const gapWidth = (props.gap * (col - 1)) / col
  const percent = 100 / col
  return `calc(${percent}% - ${gapWidth}rem)`
})

</script>


<template>
  <section class="waterfall" flex overflow-x-hidden>
    <div v-for="(column, index) in columns" :key="index" flex flex-col class="water-fall-col">
      <div box-border v-for="data in column" :key="data.key">
        <slot :data="data" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.waterfall {
  gap: v-bind(gapRem);
}
.water-fall-col {
  width: v-bind(columnWidth);
  gap: v-bind(gapRem);
}
</style>