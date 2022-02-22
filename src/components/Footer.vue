<script setup lang="ts">
import type { PageComponent } from "iles";

let pages = $(useDocuments<PageComponent>("~/pages"));

const links = $computed(() =>
  pages.filter(({ meta }) =>
    ["impressum", "datenschutzerklaerung"].includes(meta.href.slice(1))
  )
);
</script>

<template>
  <footer class="due-container-md box mt-5xl mb-4xl">
    <div class="text-center space-x-lg">
      <router-link
        v-for="(item, index) in links"
        :key="index"
        :to="item.href"
        class="text-underline"
      >
        {{ item.title }}
      </router-link>
    </div>
  </footer>
</template>
