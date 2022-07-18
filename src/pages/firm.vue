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
  getAssetsImages('blue', 'jpg'),
  getAssetsImages('xj', 'png'),
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
    top-60px
    left-0
  >
    <swiper
      class="swiper-container h-100%"
      :slides-per-view="1"
      :loop="true"
      :centered-slides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false, //  触碰后不会停止自动切换
      }"
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
      <div class="panel-left">
        <h2>象界</h2>
        <p>
          直向建筑事务所于2008年在北京成立。
        </p>
        <p>
          在十三年的设计实践过程中，面对复杂多元的设计线索，“场地”，“光” 和 “建造”是我们持续的关注点。
        </p>
        <p>
          我们认为没有一个建筑是可以脱离“场地”而存在的。而每一块场地，都一定有它已经存在在那里的某种能量，可能是一个美好的自然、一个繁忙的城市片段，也可能是生动的人和行为。建筑要做的是通过精准的空间动作，把这种能量揭示出来，转化成人的感知和生活。这很像是一块被放入水中的石头，它的周围产生了涟漪，我们便察觉到水的流动。从这个意义上讲，建筑不是开始，也不是结束，它是一种媒介，一种连接和呈现的媒介。
        </p>
        <p>
          “光”则是我们的另一个持续关注点。自然光在显现空间中固定的，有形的物质和边界的同时，也在消融着它们的物理局限。光是一种能量，赋予空间弥漫着的情绪和氛围。随着太阳在一天当中的轨迹移动，天气和季节更替，这种无形的特质永远在变化。在我们看来，光对于建筑，既是一种视觉意义上的“观看”，又是一种身体意义上的“沉浸”。
        </p>
      </div>
      <div class="panel-right">
        <img src="../../public/logo_b@2x.png" alt="">
      </div>
    </div>
    <div class="main-content-panel">
      <div class="panel-left">
        <h2>象界</h2>
        <p>
          直向建筑事务所于2008年在北京成立。
        </p>
        <p>
          在十三年的设计实践过程中，面对复杂多元的设计线索，“场地”，“光” 和 “建造”是我们持续的关注点。
        </p>
        <p>
          我们认为没有一个建筑是可以脱离“场地”而存在的。而每一块场地，都一定有它已经存在在那里的某种能量，可能是一个美好的自然、一个繁忙的城市片段，也可能是生动的人和行为。建筑要做的是通过精准的空间动作，把这种能量揭示出来，转化成人的感知和生活。这很像是一块被放入水中的石头，它的周围产生了涟漪，我们便察觉到水的流动。从这个意义上讲，建筑不是开始，也不是结束，它是一种媒介，一种连接和呈现的媒介。
        </p>
        <p>
          “光”则是我们的另一个持续关注点。自然光在显现空间中固定的，有形的物质和边界的同时，也在消融着它们的物理局限。光是一种能量，赋予空间弥漫着的情绪和氛围。随着太阳在一天当中的轨迹移动，天气和季节更替，这种无形的特质永远在变化。在我们看来，光对于建筑，既是一种视觉意义上的“观看”，又是一种身体意义上的“沉浸”。
        </p>
      </div>
      <div class="panel-right">
        <img src="../../public/logo_b@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
