<template>
  <footer class="container-md-full box mt-13">
    <div class="text-center space-x-5">
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
