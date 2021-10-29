<template>
  <div class="section">
    <section class="container is-md text-center">
      <h1 class="title title-hero lh-1 mb-s">
        Zahnarztpraxis<br />
        <span class="title-underline">Sebastian Schopplich</span>
      </h1>
      <div class="mb-xl">
        <p class="mb-xs">
          Johannes-R.-Becher-Straße 66<br class="md:d-none" />
          in 07546 Gera-Bieblach
        </p>
        <a href="tel:03654204317" class="button is-primary is-outlined">
          <carbon-phone-filled class="mr-xxs" aria-hidden="true" />
          0365 / 420 43 17
        </a>
      </div>

      <div class="columns is-centered">
        <div
          class="column is-narrow text-left mr-s pr-s"
          style="border-right: 1px solid"
        >
          <div class="title text-4 unselectable mb-xxs">&nbsp;</div>
          <p class="text-primary">
            Mo<span class="d-none md:d-inline">ntag</span><br />
            Di<span class="d-none md:d-inline">enstag</span><br />
            Mi<span class="d-none md:d-inline">ttwoch</span><br />
            Do<span class="d-none md:d-inline">nnerstag</span><br />
            Fr<span class="d-none md:d-inline">eitag</span>
          </p>
        </div>
        <div class="column is-narrow text-left">
          <h2 class="position-relative title title-opening-hours text-4 mb-xxs">
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

  <div class="pb-xl">
    <NoticeHoliday />
  </div>

  <div class="pb-xl">
    <NoticeJob />
  </div>

  <NoticeCorona />
</template>

<style scoped lang="scss">
.title-hero {
  font-family: Times, Times New Roman, serif;
  font-size: var(--text-2);

  @media (min-width: 768px) {
    font-size: calc(var(--text-1) + 1vw);
  }
}

.title-underline {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid var(--color-primary);
    transform: translateX(-50%);
  }
}

.title-opening-hours {
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(-1 * var(--space-s));
    width: var(--space-xs);
    height: 1px;
    background-color: currentColor;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: calc(-1 * var(--space-s) + -2px);
    width: var(--space-xs);
    height: 50%;
    background-color: var(--color-background);
  }
}
</style>
