<script setup>
// import { data } from "../../api/project.js"
const { t } = useI18n()
const router = useRouter()
const getAssetsImages = (name, type) => {
  return new URL(`/src/imgs/${name}.${type}`, import.meta.url).href
}
const types = ['project.city','project.cultural','project.courtyard','project.public']
let sourceData = $ref([
  {
    time: 2020,
    type: '城市公共空间',
    name: '像个利拉',
    img: getAssetsImages('blue', 'jpg'),
  },
  {
    time: 2021,
    type: '城市公共空间',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    type: '城市公共空间',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2021,
    type: '文旅度假',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    type: '文旅度假',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    type: '文旅度假',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    type: '庭院',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    type: '庭院',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    type: '庭院',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    type: '公共装置',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    type: '公共装置',
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
])
let projects = $ref([])
projects = [...sourceData]

const toggleType = (type) => {
  let res = sourceData.filter(item => {
    return item.type === type
  })
  projects = [...res]

}
const link = (item) => {
  let path = '/project/' + 1
  router.push(path)
}
</script>

<template>
  <div 
    mt-69px
    style="border-top: 1px solid #EEE;"
  >
    <div
        flex
        justify-around
        max-w-1220px
        ma-a
        p-20px
        text-14px
      >
        <a 
          inline-block
          ml-12px
          mr-12px
          cursor-pointer
          v-for="type in types" 
          :key="type"
          @click="toggleType(type)"
        >
          {{ t(type) }}
        </a>
    </div>
  </div>

  <div
    class="project"
    flex
    max-w-1220px
    ma-a
    pl-20px
    pr-20px
  >
    <ul>
      <li
        v-for="(item, index) in projects"
        :key="index"
        @click="link(item)"
      > 
        <div class="item-img" :style="{ 'backgroundImage': `url(${item.img})` }">

        </div>
        <div class="item-tip">
          <p>{{item.time}}</p>
          <p>{{item.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* .project{
-} */
.project ul{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 200px;
}
.project ul li{
  position: relative;
  width: calc(25% - 15px);
  height: 200px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 20px;
  color: #fff;
  overflow: hidden;
}
.project ul li:nth-child(4n){
  margin-right: 0;
}
.project ul li:hover .item-img{
  transform: scale(1.05);
}
.project ul li:hover .item-tip{
  opacity: 1;
  transition: opacity 0.9s, transform 1s ease-out;
}
.project ul li .item-img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
  transition: transform 1s;
}
.project ul li .item-tip{
  opacity: 0;
  transition: opacity 0.3s;
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
