<template>
  <footer class="due-container-md-full box due-mt-xl">
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
import { usePages } from "~/logic/pages";

let pages = $(usePages());

const links = pages.filter(({ href }) =>
  ["impressum", "datenschutzerklaerung"].includes(href.slice(1))
);
</script>
