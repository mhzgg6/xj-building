export const isLagerScreen = useMediaQuery('(min-width: 1024px)')
export const isMiddleScreen = useMediaQuery('(min-width: 768px)')
export const isSmallScreen = useMediaQuery('(min-width: 576px)')


export const currentScreen = computed(() => {
  let screen: 'md' | 'lg' | 'sm' = 'sm'
  
  screen = unref(isMiddleScreen) ? 'md' : screen
  screen = unref(isLagerScreen) ? 'lg' : screen

  return screen
})