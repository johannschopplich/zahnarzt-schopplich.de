import './styles/base.scss'
import './styles/components.scss'
import 'uno.css'

import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import type { RouterScrollBehavior } from 'vue-router'

const routes = generatedRoutes.map((i) => ({
  ...i,
  alias: i.path.endsWith('/') ? `${i.path}index.html` : `${i.path}.html`,
}))

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) =>
  savedPosition ?? { top: 0 }

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes, scrollBehavior }, (ctx) => {
  // install all modules from `./modules/`
  for (const m of Object.values(import.meta.globEager('./modules/*.ts'))) {
    m.install?.(ctx)
  }
})
