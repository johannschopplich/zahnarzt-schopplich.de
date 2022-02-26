<template>
  <div class="py-5xl">
    <section class="content max-w-screen-md text-center">
      <h1 class="title leading-none mb-xs">
        Zahnarztpraxis<br />
        <span class="shadow-underline">Sebastian Schopplich</span>
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

<style scoped lang="scss">
h1 {
  font-family: Times, Times New Roman, serif;
  font-size: var(--du-text-3xl);

  @media (min-width: 768px) {
    font-size: calc(var(--du-text-4xl) + 1vw);
  }
}

.shadow-underline {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid var(--du-color-primary);
    transform: translateX(-50%);
  }
}

.title-opening-hours {
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(-1 * 0.75rem);
    width: 0.5rem;
    height: 1px;
    background-color: currentColor;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: calc(-0.75rem - 2px);
    width: 0.5rem;
    height: 50%;
    background-color: var(--du-color-background);
  }
}
</style>
