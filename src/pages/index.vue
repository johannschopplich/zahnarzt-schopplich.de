<template>
  <div class="section">
    <section class="container is-md text-center">
      <h1 class="title text-hero lh-1 mb-xs">
        Zahnarztpraxis<br />
        <span class="underlined">Sebastian Schopplich</span>
      </h1>
      <div class="mb-xl">
        <p class="mb-xs">Johannes-R.-Becher-Straße 66 in 07546 Gera-Bieblach</p>
        <a href="tel:03654204317" class="button is-primary is-outlined">
          <carbon-phone-filled class="mr-xxs" aria-hidden="true" />
          0365 / 420 43 17
        </a>
      </div>

      <h2 class="title text-4 mb-xxs">Öffnungszeiten</h2>
      <div class="columns is-centered">
        <div
          class="column is-narrow text-left mr-s pr-s d-none sm:d-block"
          style="border-right: 1px solid"
        >
          <p>
            Montag<br />
            Dienstag<br />
            Mittwoch<br />
            Donnerstag<br />
            Freitag
          </p>
        </div>
        <div class="column is-narrow text-left">
          <p>
            <strong class="sm:d-none">Montag<br /></strong>
            8.00-13.00 Uhr und 13.30-16.00 Uhr<br />
            <strong class="sm:d-none">Dienstag<br /></strong>
            8.00-13.30 Uhr und 14.15-17.30 Uhr<br />
            <strong class="sm:d-none">Mittwoch<br /></strong>
            8.00-13.00 Uhr<br />
            <strong class="sm:d-none">Donnerstag<br /></strong>
            8.30-13.30 Uhr und 14.15-18.00 Uhr<br />
            <strong class="sm:d-none">Freitag<br /></strong>8.00-12.00 Uhr
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
