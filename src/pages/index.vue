<template>
  <div class="py-5xl">
    <section class="content max-w-screen-md text-center">
      <h1 class="title leading-none mb-xs">
        Zahnarztpraxis<br />
        <span class="shadow-underline triangle">Sebastian Schopplich</span>
      </h1>
      <div class="mb-5xl">
        <p class="mb-2">
          Johannes-R.-Becher-Straße 66<br class="md:hidden" />
          in 07546 Gera-Bieblach
        </p>
        <a href="tel:03654204317" class="button-primary-outlined">
          <CarbonPhoneFilled class="mr-1" aria-hidden="true" />
          0365 / 420 43 17
        </a>
      </div>

      <div class="columns items-center justify-center">
        <div
          class="column-narrow text-left mr-xs pr-xs"
          style="border-right: 1px solid"
        >
          <div class="due-title text-size-xl unselectable mb-1">&nbsp;</div>
          <p
            v-for="day in [
              'Montag',
              'Dienstag',
              'Mittwoch',
              'Donnerstag',
              'Freitag',
            ]"
            :key="day"
            class="text-primary"
          >
            {{ day.slice(0, 2)
            }}<span class="hidden md:inline">{{ day.slice(2) }}</span>
          </p>
        </div>

        <div class="column-narrow text-left">
          <h2 class="relative title title-opening-hours text-size-xl mb-1">
            Öffnungszeiten
          </h2>
          <p>8.00-13.00 Uhr und 13.30-16.00 Uhr</p>
          <p>8.00-13.30 Uhr und 14.15-17.30 Uhr</p>
          <p>8.00-13.00 Uhr</p>
          <p>8.30-13.30 Uhr und 14.15-18.00 Uhr</p>
          <p>8.00-12.00 Uhr</p>
        </div>
      </div>
    </section>
  </div>

  <div class="pb-5xl">
    <NoticeHoliday />
  </div>

  <div class="pb-5xl">
    <NoticeJob />
  </div>

  <NoticeCorona />
</template>

<style scoped>
h1 {
  @apply text-size-3xl md:text-size-[calc(var(--du-text-4xl)+1vw)];
  font-family: Times, Times New Roman, serif;
}

.triangle {
  @apply relative after:content-empty after:absolute after:-bottom-8px after:left-1/2 after:b-l-8 after:b-l-transparent after:b-r-8 after:b-r-transparent after:b-t-8 after:b-t-primary after:-translate-x-50%;
}

.title-opening-hours {
  @apply before:content-empty before:absolute before:top-1/2 before:left-[calc(-1*0.75rem)] before:w-2 before:h-1px before:bg-current;
  @apply after:content-empty after:absolute after:top-0 after:left-[calc(-0.75rem-2px)] after:w-2 after:h-1/2 after:bg-theme-background;
}
</style>
