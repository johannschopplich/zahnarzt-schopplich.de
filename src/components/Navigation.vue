<template>
  <nav
    v-if="route.path !== '/'"
    class="flex items-center due-font-7 text-uppercase"
  >
    <router-link
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="due-button-text"
    >
      <carbon-arrow-left class="text-primary mr-1" aria-hidden="true" />Zurück
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
nav::after {
  content: '';
  height: 1px;
  background-color: var(--du-color-primary);
  width: 100%;
}
</style>
