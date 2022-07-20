<script setup>
import { isIndex } from '~/composables/isIndex'
</script>

<template>
  <div v-if="!isIndex" sticky h-100px flex justify-center items-center z-10 text-12px bg-white class="color-#aaa/80" style="top: calc(100vh - 100px)">
    © Copyright 2008-2020 | Vector Architects | All Rights Reserved
    <span>
      Powered by
      <a href="">mhz</a>
      <a href="">京ICP备18000933号</a>
    </span>
  </div>
</template>
