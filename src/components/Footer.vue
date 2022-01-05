<template>
  <footer class="due-container-md-full box due-mt-xl due-mb-l">
    <div class="text-center space-x-5">
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

<script setup lang="ts">
import type { PageComponent } from "iles";

let pages = $(useDocuments<PageComponent>("~/pages"));

const links = pages.filter(({ meta }) =>
  ["impressum", "datenschutzerklaerung"].includes(meta.href.slice(1))
);
</script>
