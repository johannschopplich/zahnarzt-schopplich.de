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

const route = useRoute()

const base = 'https://zahnarzt-schopplich.de'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const matter = computed<any>(() => route.meta?.frontmatter)

const url = computed(() => base + route.path)
const title = computed(() =>
  matter.value?.title
    ? `${matter.value.title} – Zahnarztpraxis Schopplich`
    : 'Zahnarztpraxis Sebastian Schopplich'
)
const description = computed(
  () =>
    matter.value?.description ??
    'Erfahren Sie mehr über unser Angebot oder vereinbaren Sie direkt Ihren Termin bei uns! Unser Praxis-Team in Bieblach-Ost freut sich auf Ihren Besuch.'
)

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
