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
</script>

<template>
  <nav
    fixed
    left-0
    top-0
    py-4
    text-xl
    class="header w-100%"
  >
    <div class="header-warp" px-2>
      <div class="logo">
        <img src="../../public/logo_b@2x.png" alt="logo">
      </div>
      <ul class="navigation">
        <li v-for="(nav, index) in navList" :key="index">
          {{ nav.name }}
        </li>
      </ul>
    </div>
  </nav>
</template>
