<template>
  <div class="section">
    <div class="container is-md text-center">
      <h1 class="title text-1 lh-1">
        <span class="underlined">{{ props.frontmatter.title }}</span>
      </h1>
    </div>
  </div>

  <div class="container is-md is-fullwidth">
    <Navigation class="mb-xs mr-xs" />

    <section class="box">
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { isClient, useEventListener } from '@vueuse/core'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props = defineProps<{ frontmatter: any }>()

const navigate = () => {
  if (window.location.hash) {
    document
      .querySelector(decodeURIComponent(window.location.hash))
      ?.scrollIntoView({ behavior: 'smooth' })
  }
}

if (isClient) {
  useEventListener(window, 'hashchange', navigate)

  onMounted(() => {
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#"]'
    )) {
      anchor.addEventListener('click', (evt) => {
        evt.preventDefault()
        window.history.replaceState({}, '', anchor.href)
        navigate()
      })
    }

    navigate()
    setTimeout(navigate, 500)
  })
}
</script>
