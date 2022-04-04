<template layout="base">
  <div class="py-5xl">
    <div class="content max-w-screen-md text-center">
      <h1 class="title text-size-4xl leading-none">
        <span class="shadow-underline">{{ $frontmatter.title }}</span>
      </h1>
    </div>
  </div>

  <div class="content max-w-screen-md w-full">
    <AppNavigation class="mb-2 mr-2" />

    <section class="box prose">
      <slot />
    </section>
  </div>
</template>
