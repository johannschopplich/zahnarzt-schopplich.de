<template>
  <main>
    <div class="due-py-xl">
      <div class="due-container-md text-center">
        <h1 class="due-title due-text-1 leading-none">
          <span class="underlined">{{ $frontmatter.title }}</span>
        </h1>
      </div>
    </div>

    <div class="due-container-md-full">
      <Navigation class="mb-2 mr-2" />

      <section ref="content" class="box content">
        <slot />
      </section>
    </div>
  </main>

  <Footer />
</template>
