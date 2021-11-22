<template>
  <div class="due-py-xl">
    <section class="due-container-md text-center">
      <h1 class="due-title title-hero leading-none due-mb-s">
        Zahnarztpraxis<br />
        <span class="underlined">Sebastian Schopplich</span>
      </h1>
      <div class="due-mb-xl">
        <p class="mb-2">
          Johannes-R.-Becher-Straße 66<br class="md:hidden" />
          in 07546 Gera-Bieblach
        </p>
        <a href="tel:03654204317" class="due-button-primary-outlined">
          <carbon-phone-filled class="mr-1" aria-hidden="true" />
          0365 / 420 43 17
        </a>
      </div>

      <div class="columns items-center justify-center">
        <div
          class="column-narrow text-left mr-3 pr-3"
          style="border-right: 1px solid"
        >
          <div class="due-title due-text-4 unselectable mb-1">&nbsp;</div>
          <p class="text-primary">
            Mo<span class="hidden md:inline">ntag</span><br />
            Di<span class="hidden md:inline">enstag</span><br />
            Mi<span class="hidden md:inline">ttwoch</span><br />
            Do<span class="hidden md:inline">nnerstag</span><br />
            Fr<span class="hidden md:inline">eitag</span>
          </p>
        </div>
        <div class="column-narrow text-left">
          <h2 class="relative due-title title-opening-hours due-text-4 mb-1">
            Öffnungszeiten
          </h2>
          <p>
            8.00-13.00 Uhr und 13.30-16.00 Uhr<br />
            8.00-13.30 Uhr und 14.15-17.30 Uhr<br />
            8.00-13.00 Uhr<br />
            8.30-13.30 Uhr und 14.15-18.00 Uhr<br />
            8.00-12.00 Uhr
          </p>
        </div>
      </div>
    </section>
  </div>

  <div class="due-pb-xl">
    <NoticeHoliday />
  </div>

  <div class="due-pb-xl">
    <NoticeJob />
  </div>

  <NoticeCorona />
</template>

<style scoped lang="scss">
.title-hero {
  font-family: Times, Times New Roman, serif;
  font-size: var(--du-text-2);

  @media (min-width: 768px) {
    font-size: calc(var(--du-text-1) + 1vw);
  }
}

.underlined {
  position: relative;

  &::after {
    content: '';
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
    content: '';
    position: absolute;
    top: 50%;
    left: calc(-1 * var(--du-space-s));
    width: var(--du-space-xs);
    height: 1px;
    background-color: currentColor;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: calc(-1 * var(--du-space-s) + -2px);
    width: var(--du-space-xs);
    height: 50%;
    background-color: var(--du-color-background);
  }
}
</style>
