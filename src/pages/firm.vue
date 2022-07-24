<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const { t } = useI18n()

const getAssetsImages = (name, type) => {
  return new URL(`/src/imgs/${name}.${type}`, import.meta.url).href
}
const imgs = [
  getAssetsImages('xj', 'png'),
  getAssetsImages('blue', 'jpg'),
]

console.log(imgs)
const modules = [Autoplay, Pagination, Navigation, A11y]
const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

// 事务所
<template>
  <div
    class="main-image w-100%"
    fixed
    top-26
    left-0
  >
      <!-- :autoplay="{
        delay: 2500,
        disableOnInteraction: false, //  触碰后不会停止自动切换
      }" -->
    <swiper
      class="swiper-container h-100%"
      :slides-per-view="1"
      :loop="true"
      :centered-slides="true"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide v-for="(item, i) in imgs" :key="i" class="swiper-slide">
        <img
          class="w-100% h-100%"
          :src="item"
          alt=""
        >
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
  <div class="swiper-arrow-down" />
  <div
    class="main-content"
  >
    <div class="main-content-panel">
      <div 
        class="logo"
      >
        <img src="../../public/logo.png" alt="">
      </div>
      <p class="tip">为独特的场景记忆而创造</p>
      <h2>象界设计</h2>
      <div class="introduce">
        <p>
          象界的设计理念在于在项目中寻找平衡，记忆与宁静. 灵感来源与当地文化，场地感知，和空间的重塑，
          在此过程中，时间轴一直是我们在一个空间中所关注的，它并非转舜即逝的趋势，如空间的永续，情感的共鸣，
          和再创的新记忆，都赋予时间的重要性。每一个项目都有着一段故事，每一个故事都应有独特的记忆内容，
          我们一直秉承一颗工匠之心抒写每一段独特记忆.
        </p>
      </div>
      <div class="concept">
        <span>空间永续</span>
        <span>内心工匠</span>
        <span>独特记忆</span>
        <span>宁静优雅</span>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
