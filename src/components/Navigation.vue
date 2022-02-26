<template>
  <nav
    v-if="route.path !== '/'"
    class="flex items-center after:content-empty after:h-1px after:bg-primary after:w-full"
  >
    <RouterLink
      :to="route.path.split('/').slice(0, -1).join('/') || '/'"
      class="button-text text-uppercase text-size-sm pl-1 pr-2"
    >
      <CarbonArrowLeft class="text-primary mr-1" aria-hidden="true" />
      <span>Zurück</span>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
