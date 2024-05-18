import { createApp } from 'vue'
import autofit from 'autofit.js'
import Dashboard from './dashboard/index.vue'

const boostrap = async () => {
  const app = createApp(Dashboard)
  app.mount('#app')
  const ScreenSize = {
    big: [2560, 1440],
    normal: [1920, 1080],
    small: [1280, 720],
  }['normal']

  autofit.init({
    el: '#app',
    dw: ScreenSize[0],
    dh: ScreenSize[1],
    resize: true,
    ignore: ['.map-local-marker'],
  })
}
boostrap()
