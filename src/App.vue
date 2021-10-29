<template>
  <main>
    <router-view />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const base = 'https://zahnarzt-schopplich.de'
const route = useRoute()
const url = computed(() => base + route.path)

const title = 'Zahnarztpraxis Sebastian Schopplich'
const description =
  'Erfahren Sie mehr über unser Angebot oder vereinbaren Sie direkt Ihren Termin bei uns! Unser Praxis-Team in Bieblach-Ost freut sich auf Ihren Besuch.'

// https://github.com/vueuse/head
useHead({
  title,
  link: [{ rel: 'canonical', href: url }],
  meta: [
    { name: 'description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: `${base}/android-chrome-512x512.png` },
  ],
})
</script>
