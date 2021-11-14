import { defineConfig, presetUno } from 'unocss'
import { presetDue } from 'duecss'

export default defineConfig({
  presets: [presetUno(), presetDue()],
})
