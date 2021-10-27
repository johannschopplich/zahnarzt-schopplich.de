<template>
  <nav v-if="route.path !== '/'" class="navigation">
    <router-link
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="button is-text"
    >
      <carbon-arrow-left class="text-primary mr-xxs" aria-hidden="true" />Zurück
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  font-size: var(--text-7);
  text-transform: uppercase;
}

nav::after {
  content: '';
  height: 1px;
  background-color: var(--color-primary);
  width: 100%;
}
</style>
