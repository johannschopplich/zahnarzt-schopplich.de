<template>
  <div class="section">
    <section class="container is-md text-center">
      <h1 class="title text-hero lh-1 mb-s">
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
    <section class="container is-md box">
      <h2 class="title-job bg-primary text-7 text-semibold p-xxs rounded">
        Stellen<br />anzeige
      </h2>
      <div class="content">
        <p>
          Zur Verstärkung unseres Teams wird ab dem
          <strong>1. November 2021</strong> eine
          <strong>
            Zahnarzthelferin in Voll- oder Teilzeit in unbefristeter Anstellung
          </strong>
          gesucht. Ihre Bewerbung wird in Schriftform erbeten.
        </p>
      </div>
    </section>
  </div>

  <!-- <div class="pb-xl">
    <section class="container is-md">
      <div class="content bg-white p-l">
        <h2 class="text-center" style="color: var(--color-danger)">
          Die Zahnarztpraxis ist vom 5.–22. November wegen Urlaubs geschlossen.
        </h2>
        <p>
          Ab dem 23. November sind wir zu den regulären Sprechzeiten wieder für
          Sie da!
        </p>
        <h3>Vertretung</h3>
        <p>
          <strong>Zahnarztpraxis Dr. Kokott & Koll. Lesser</strong><br />
          Dr.-Friedrich-Wolf-Straße 2 in 07545 Gera, Telefon:
          <a href="tel:03658001160">800 11 60</a>
        </p>
        <p>und</p>
        <p>
          <strong>Zahnarztpraxis Kaija Saeltzer</strong><br />
          Johannes-R.-Becher-Straße 1 in 07546 Gera, Telefon:
          <a href="tel:0365486336">48 63 36</a><br />
          (nicht am 13. November 2020)
        </p>
        <p>
          <strong style="color: var(--color-danger)">
            Bitte melden Sie sich telefonisch an!
          </strong>
        </p>
      </div>
    </section>
  </div> -->

  <section class="container is-md is-fullwidth box box-corona">
    <div class="content text-center">
      <h2>
        Sehr geehrte Patienten,<br />wir sind trotz der Corona-Pandemie<br />weiterhin
        für Sie da!
      </h2>
      <p>
        Bitte beachten Sie unsere
        <strong style="color: var(--color-danger)">
          Schutzmaßnahmen vor der Ausbreitung des Coronavirus </strong
        >. Die Gefahr einer Ansteckung mit dem neuartigen Coronavirus ist zur
        Zeit hoch.
      </p>

      <h2 style="color: var(--color-danger)">
        Bitte betreten Sie die Praxis nicht sofort, sondern beantworten Sie sich
        erst folgende Fragen:
      </h2>
      <div class="columns text-left">
        <div class="column is-narrow pr-xs">
          <carbon-help />
        </div>
        <div class="column">
          <p>
            Hatten Sie persönlichen Kontakt zu einem Menschen, der am
            Coronavirus erkrankt ist oder im Verdacht steht, am Coronavirus
            erkrankt zu sein?<br />
            <strong>oder</strong>
          </p>
        </div>
      </div>
      <div class="columns text-left">
        <div class="column is-narrow pr-xs">
          <carbon-help />
        </div>
        <div class="column">
          <p>
            Haben Sie Anzeichen einer Coronavirus-Infektion z. B. Atemnot,
            Husten, Fieber, Halsschmerzen?<br />
          </p>
        </div>
      </div>

      <h3 class="mb-m">
        Haben Sie eine Frage mit „Ja“ beantwortet? — Rufen Sie bitte unsere
        Praxis per Telefon an:
      </h3>
      <a
        href="tel:03654204317"
        class="button is-primary is-l is-outlined text-center"
      >
        <carbon-phone-filled class="mr-xxs" aria-hidden="true" />
        0365 / 420 43 17
      </a>

      <p>
        Gern besprechen wir dann gemeinsam das weitere Vorgehen und kontaktieren
        Ihren betreuenden Hausarzt.
      </p>
      <h3 style="color: var(--color-danger)">
        Haben Sie alle Fragen mit „Nein“ beantwortet, steht Ihrer Behandlung
        nichts im Wege. Sie können Ihre geplanten Termine unverändert
        wahrnehmen.
      </h3>
      <h3 class="text-primary">Achtung: Zutritt nur mit Mund-Nasen-Schutz!</h3>
      <p>Ihr Sebastian Schopplich & Mitarbeiterinnen</p>
    </div>
  </section>
</template>

<style scoped>
.title-job {
  position: absolute;
  top: -1rem;
  left: -0.5rem;
  color: white;
  font-family: var(--font-family-system);
  line-height: 1;
  text-transform: uppercase;
  transform: rotate(-6deg);
  z-index: 10;
}

.box-corona {
  border: 0.5em solid var(--color-danger);
}

.box-corona h2:not(:first-child),
.box-corona h3:not(:first-child) {
  margin-top: 0;
}
</style>
