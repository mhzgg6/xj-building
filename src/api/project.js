function getAssetsImages(name, type) {
  return new URL(`/src/imgs/${name}.${type}`, import.meta.url).href
}
export const data = [
  {
    index: 1,
    time: 2020,
    name: '像个利拉',
    img: getAssetsImages('blue', 'jpg'),
    details: [
      getAssetsImages('blue', 'jpg'),
      etAssetsImages('xj', 'png'),
      getAssetsImages('blue', 'jpg'),
      etAssetsImages('xj', 'png'),
      getAssetsImages('blue', 'jpg'),
      etAssetsImages('xj', 'png'),
      getAssetsImages('blue', 'jpg'),
      etAssetsImages('xj', 'png'),
      getAssetsImages('blue', 'jpg'),
      etAssetsImages('xj', 'png'),
    ]
  },
  {
    index: 1,
    time: 2021,
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2021,
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  },
  {
    time: 2022,
    name: '像个利拉',
    img: getAssetsImages('xj', 'png'),
  }
]