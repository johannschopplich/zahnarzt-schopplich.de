<template>
  <nav
    v-if="route.path !== '/'"
    class="flex items-center due-font-7 text-uppercase after:content-empty after:h-1px after:bg-primary after:w-full"
  >
    <RouterLink
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="due-button-text"
    >
      <CarbonArrowLeft class="text-primary mr-1" aria-hidden="true" />Zurück
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>
