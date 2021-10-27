<template>
  <footer class="container is-md is-fullwidth box mt-xl">
    <div class="text-center h-stacked">
      <router-link
        v-for="(value, name, index) in links"
        :key="index"
        :to="name"
        class="text-underline"
      >
        {{ value }}
      </router-link>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = {
  impressum: 'Impressum',
  datenschutzerklaerung: 'Datenschutzerklärung',
}
</script>
