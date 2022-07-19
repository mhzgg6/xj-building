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

const getAssetsImages = (name, type) => {
  return new URL(`/src/imgs/${name}.${type}`, import.meta.url).href
}
const imgs = [
  getAssetsImages('blue', 'jpg'),
  getAssetsImages('xj', 'png'),
]

const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const { t } = useI18n()
</script>

<template>
  <div h-100vh w-100vw left-0 top-0 absolute>
    <swiper class="swiper-container h-100%" :slides-per-view="1" :loop="true" :centered-slides="false" :navigation="true"
      :modules="modules">
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
.swiper-button-next, .swiper-button-prev {
  display: none;
}

</style>