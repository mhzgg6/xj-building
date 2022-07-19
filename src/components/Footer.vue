<script setup>
import { isIndex } from '~/composables/isIndex'
</script>

<template>
  <div v-if="!isIndex" relative h-200px flex justify-center items-center z-10 text-12px bg-white class="color-#aaa/80">
    © Copyright 2008-2020 | Vector Architects | All Rights Reserved
    <span>
      <strong>Powered by </strong>
      <a href="">mhz</a>
      <a href="">京ICP备18000933号</a>
    </span>
  </div>
</template>
