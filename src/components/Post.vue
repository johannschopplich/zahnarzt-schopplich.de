<template>
  <div class="section">
    <div class="container is-md text-center">
      <h1 class="title text-1 lh-1">
        <span class="title-underline">{{ props.frontmatter.title }}</span>
      </h1>
    </div>
  </div>

  <div class="container is-md is-fullwidth">
    <Navigation class="mb-xs mr-xs" />

    <section ref="content" class="box">
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { isClient, useEventListener } from '@vueuse/core'
import { useRouter } from 'vue-router'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props = defineProps<{ frontmatter: any }>()

const content = ref<HTMLElement>()
const router = useRouter()

const navigate = () => {
  if (window.location.hash) {
    document
      .querySelector(decodeURIComponent(window.location.hash))
      ?.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleAnchors = (
  event: MouseEvent & {
    target: HTMLElement
  }
) => {
  const link = event.target.closest('a')

  if (
    !event.defaultPrevented &&
    link &&
    event.button === 0 &&
    link.target !== '_blank' &&
    link.rel !== 'external' &&
    !link.download &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  ) {
    const url = new URL(link.href)

    if (url.origin === location.origin) {
      event.preventDefault()
      if (url.hash) {
        window.history.replaceState({}, '', url.hash)
        navigate()
      } else {
        router.push({ path: url.pathname })
      }
    }
  }
}

if (isClient) {
  useEventListener(window, 'hashchange', navigate)
  useEventListener(content, 'click', handleAnchors)

  onMounted(() => {
    navigate()
    setTimeout(navigate, 500)
  })
}
</script>
