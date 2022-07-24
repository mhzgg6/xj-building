<script setup lang='ts'>
import { PropType } from 'vue';

const { t } = useI18n()

interface navItem {
  label: string
  value: string | number
}

type navItemList = Array<navItem>

const porps = defineProps({
  items: {
    type: Array as PropType<navItemList>,
    default: []
  }
})


const emit = defineEmits(['change'])

</script>

<template>
  <article flex text-1>
    <a flex justify-center items-center cursor-pointer w-24 class="color-#aaa/80 hover:color-#333/80"
      v-for="(item, $index) in porps.items" :key="item.value" @click="emit('change', item.value, $index)"
      :class="item.value === 'all' ? 'b-1 rounded b-gray/80' : ''">
      <div text-3 v-if="item.value === 'all'" i-carbon:chevron-left />{{ t(item.label) }}
    </a>
  </article>
</template>

<style scoped>
</style>