<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  console.log(locale.value)
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const navList = reactive([
  { name: t('nav.office'), path: '/firm' },
  { name: t('nav.project'), path: '/project' },
  { name: t('nav.media'), path: '/media' },
  { name: t('nav.recruit'), path: '/work' },
  { name: t('nav.contact'), path: '/contact' },
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

const router = useRouter()

const go = (path: string) => router.push(path)
</script>

<template>
  <nav sticky z-10 left-0 top-0 p-5 text-xl class="w-100%" :class="navClass">
    <div flex justify-between px-2>
      <div class="logo w-20" @click="go('/')">
        <img src="../../public/logo_b@2x.png" alt="logo">
      </div>

      <div flex>
        <router-link v-for="nav in navList" :key="nav.path" :to="nav.path" icon-btn m-r-2 cursor-pointer text-4>
          {{ nav.name }}
        </router-link>

        <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
          <div i-carbon-language />
        </a>
      </div>
    </div>
  </nav>
</template>
