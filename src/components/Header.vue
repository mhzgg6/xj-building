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
  { name: '联系', path: '/contact' }
])
</script>

<template>
  <nav text-xl mt-6>
    <div class="logo"></div>
    <ul class="navigation">
      <li v-for="(nav, index) in navList" :key="index">
        {{ nav.name }}
      </li>
    </ul>
  </nav>
</template>
