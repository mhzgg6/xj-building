// 判断是否是首页 项目详情
const names = ['project-num', 'index']
export const isIndex = computed(() => names.includes(useRoute().name))