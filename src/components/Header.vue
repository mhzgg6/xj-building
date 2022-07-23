<script setup lang="ts">
import { isIndex } from '~/composables/isIndex'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  const html = document.querySelector('html')
  html?.setAttribute('lang', locale.value)
}

const navList = reactive([
  { name: 'nav.office', path: '/firm' },
  { name: 'nav.project', path: '/project' },
  { name: 'nav.media', path: '/media' },
  { name: 'nav.job', path: '/job' },
  { name: 'nav.contact', path: '/contact' },
])

// 导航页面的动态class
const navClass = computed(() =>
  isIndex.value
    ? 'bg-transparent text-white/90'
    : 'bg-white text-black border-b-gray',
)

const router = useRouter()

const go = (path: string) => router.push(path)
</script>

<template>
  <nav fixed z-10 left-0 top-0 p-5 text-xl flex class="w-100%" :class="navClass">
    <div flex justify-between px-2 w-1180px md:flex-1 m-auto>
      <div class="logo w-20" @click="go('/')">
        <img src="../../public/logo_b@2x.png" alt="logo">
      </div>

      <div flex>
        <router-link v-for="nav in navList" :key="nav.path" :to="nav.path" icon-btn w-24 text-center cursor-pointer text-5>
          {{ t(nav.name) }}
        </router-link>

        <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
          <div i-carbon-language />
        </a>
      </div>
    </div>
  </nav>
</template>
