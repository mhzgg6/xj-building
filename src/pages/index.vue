<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay, Thumbs, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const modules = [Autoplay, Thumbs, Navigation]

const getAssetsImages = (name, type) => {
  return new URL(`/src/imgs/${name}.${type}`, import.meta.url).href
}
const imgs = [
  getAssetsImages('blue', 'jpg'),
  getAssetsImages('xj', 'png'),
  getAssetsImages('funk', 'png'),
  getAssetsImages('diner', 'jpg'),
]

let thumbsSwiper = $ref()

const setThumbsSwiper = (swiper) => {
  thumbsSwiper = swiper;
}
</script>

<template>
  <div h-100vh w-100vw left-0 top-0 absolute>
    <swiper class="swiper-container h-100%" :slides-per-view="1" :loop="true" :centered-slides="false"
      :autoplay="{ delay: 3000, disableOnInteraction: false }" :modules="modules" :thumbs="{ swiper: thumbsSwiper }">
      <swiper-slide v-for="(item, i) in imgs" :key="i" class="swiper-slide">
        <img :src="item" alt="">
      </swiper-slide>
    </swiper>

    <div class="thumb" z-10  hover:op-100 cursor-pointer delay-200>
      <swiper :navigation="true" :slides-per-view="imgs.length" :loop="true" :space-between="20"
        :watch-slides-progress="true" :modules="modules" @swiper="setThumbsSwiper" class="gallery">
        <swiper-slide v-for="(item, i) in imgs" :key="i" class="swiper-slide">
          <img :src="item" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>


<style scoped>
.swiper-slide {
  background-size: cover;
  background-position: center;
}


.thumb {
  height: 50vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 10px 0;
  position: relative;
  top: -55vh;
  display: flex;
  justify-content: center;
  padding-top: 25vh;
  --swiper-theme-color: rgba(255,255,255, 0.8);
}

.gallery {
  height: 25vh;
  width: 80vw;
  background: transparent;
  padding: 20px;
  backdrop-filter: blur(10px);
}

.thumb :deep(.swiper-slide) {
  height: 100%;
  opacity: 0.6;
}

.thumb :deep(.swiper-slide-visible.swiper-slide-thumb-active) {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

