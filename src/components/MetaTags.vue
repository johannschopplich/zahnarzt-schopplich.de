<script setup lang="ts">
import faviconSrc from "/images/favicon.svg";
import appleTouchIconSrc from "/images/apple-touch-icon.png";

const { frontmatter, site } = usePage();

let imageUrl = $computed(
  () => `${site.url}${frontmatter.image || appleTouchIconSrc}`
);
</script>

<template>
  <Head>
    <meta property="theme-color" content="#fbdfb1" />

    <meta
      name="description"
      :content="frontmatter?.description ?? site.description"
    />

    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      :content="frontmatter?.description ?? site.description"
    />
    <meta property="og:image" :content="imageUrl" />

    <link rel="icon" type="image/svg+xml" :href="faviconSrc" />
    <link rel="apple-touch-icon" :href="appleTouchIconSrc" sizes="180x180" />
  </Head>
</template>
