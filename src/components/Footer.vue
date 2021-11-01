<template>
  <footer class="container is-md is-fullwidth box mt-xl">
    <div class="text-center h-stacked">
      <router-link
        v-for="(item, index) in links"
        :key="index"
        :to="item.path"
        class="text-underline"
      >
        {{ (item.meta?.frontmatter as any)?.title }}
      </router-link>
    </div>
  </footer>
</template>

<script setup lang="ts">
import generatedRoutes from 'virtual:generated-pages'

const links = generatedRoutes.filter(({ path }) =>
  ['impressum', 'datenschutzerklaerung'].includes(path.slice(1))
)
</script>
