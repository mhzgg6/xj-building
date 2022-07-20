<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper";
const modules = [Autoplay]

const getAssetsImages = (name, type) => {
  return new URL(`/src/imgs/${name}.${type}`, import.meta.url).href
}
const imgs = [
  getAssetsImages('blue', 'jpg'),
  getAssetsImages('xj', 'png'),
]

</script>

<template>
  <div h-100vh w-100vw left-0 top-0 absolute>
    <swiper class="swiper-container h-100%" :slides-per-view="1" :loop="true" :centered-slides="false"
      :autoplay="{ delay: 3000, disableOnInteraction: false }" :modules="modules">
      <swiper-slide v-for="(item, i) in imgs" :key="i" class="swiper-slide">
        <img class="w-100% h-100%" :src="item" alt="">
      </swiper-slide>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" />
      <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>


<style scoped>
.swiper-button-next,
.swiper-button-prev {
  display: none;
}
</style>
