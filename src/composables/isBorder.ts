// 判断是否是首页 项目详情
const names = ['project', 'media']
export const isBorder = computed(() => names.includes(useRoute().name))