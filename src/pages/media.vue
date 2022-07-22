<script setup lang='ts'>
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
  getAssetsImages('funk', 'png'),
  getAssetsImages('diner', 'jpg'),
]
</script>


<template>
  <swiper :modules="modules" :loop="true" :slides-per-view="1" :autoplay="{ delay: 1000, disableOnInteraction: false }"
    class="mySwiper">
    <swiper-slide>Slide sdsdddddddddddd1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
  <viewer :images="imgs">
    <img v-for="src in imgs" :key="src" :src="src">
  </viewer>
</template>

<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 400px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-prev {
  display: none;
}
</style>
<route lang="yaml">
meta:
  layout: home
</route>
