<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const navList = reactive([
  { name: '事务所', path: '/firm' },
  { name: '项目', path: '/project' },
  { name: '媒体', path: '/media' },
  { name: '招聘', path: '/work' },
  { name: '联系', path: '/contact' },
])

const route = useRoute()

// 判断是否是首页
const isIndex = $computed(() => route.name === 'index')

// 导航页面的动态class
const navClass = computed(() =>
  isIndex
    ? 'bg-transparent text-gray'
    : 'bg-white text-black border-b-gray',
)
</script>

<template>
  <nav sticky z-10 left-0 top-0 p-5 text-xl class="w-100%" :class="navClass">
    <div flex justify-between px-2>
      <div class="logo w-20">
        <img src="../../public/logo_b@2x.png" alt="logo">
      </div>

      <div flex>
        <div
          v-for="nav in navList"
          :key="nav.path"
          m-r-2
          cursor-pointer
          text-4
        >
          {{ nav.name }}
        </div>
      </div>
    </div>
  </nav>
</template>
