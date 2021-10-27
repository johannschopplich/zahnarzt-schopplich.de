<template>
  <div class="section">
    <section class="container is-md text-center">
      <h1 class="title title-hero lh-1">
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

      <h2 class="title text-4 mb-xxs">Öffnungszeiten</h2>
      <div class="columns is-centered">
        <div
          class="column is-narrow text-left mr-s pr-s"
          style="border-right: 1px solid"
        >
          <p>
            Mo<span class="d-none md:d-inline">ntag</span><br />
            Di<span class="d-none md:d-inline">enstag</span><br />
            Mi<span class="d-none md:d-inline">ttwoch</span><br />
            Do<span class="d-none md:d-inline">nerstag</span><br />
            Fr<span class="d-none md:d-inline">eitag</span>
          </p>
        </div>
        <div class="column is-narrow text-left">
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

  <div class="section">
    <NoticeJob />
  </div>

  <NoticeCorona />
</template>

<style>
.title-hero {
  font-family: Times, Times New Roman, serif;
  font-size: calc(var(--text-1) + 1vw);
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 0.5rem),
    calc(50% + 0.5rem) calc(100% - 0.5rem),
    50% 100%,
    calc(50% - 0.5rem) calc(100% - 0.5rem),
    0 calc(100% - 0.5rem)
  );
  border-bottom: calc(0.5rem - 1px) solid var(--color-primary);
}
</style>
