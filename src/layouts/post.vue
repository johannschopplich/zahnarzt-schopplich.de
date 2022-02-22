<template layout="base">
  <div class="py-5xl">
    <div class="due-container-md text-center">
      <h1 class="due-title text-size-4xl leading-none">
        <span class="underlined">{{ $frontmatter.title }}</span>
      </h1>
    </div>
  </div>

  <div class="due-container-md-full">
    <Navigation class="mb-2 mr-2" />

    <section class="box prose">
      <slot />
    </section>
  </div>
</template>
