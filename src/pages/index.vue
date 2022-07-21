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

    <swiper :navigation="true" :slides-per-view="imgs.length" :loop="true" :space-between="20"
      :watch-slides-progress="true" :modules="modules" @swiper="setThumbsSwiper" class="thumb" op-0 hover:op-100 cursor-pointer
      delay-200>
      <swiper-slide v-for="(item, i) in imgs" :key="i" class="swiper-slide">
        <img :src="item" alt="">
      </swiper-slide>
    </swiper>
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
  height: 20vh;
  width: 80%;
  box-sizing: border-box;
  padding: 10px 0;
  padding-top: 10vh;
  position: relative;
  top: -25vh;
  background: rgba(0, 0, 0, 0.2);
}

.thumb .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.thumb .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

