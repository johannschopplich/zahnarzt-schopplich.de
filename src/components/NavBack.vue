<template>
  <nav v-if="route.path !== '/'">
    <router-link
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="button is-text"
    >
      <carbon-arrow-left class="text-primary mr-xxs" />Zurück
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
