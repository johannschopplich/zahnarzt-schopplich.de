<template>
  <div class="container is-md is-fullwidth box">
    <div class="content text-center">
      <h2>
        Sehr geehrte Patienten,<br />wir sind trotz der Corona-Pandemie<br />weiterhin
        für Sie da!
      </h2>
      <p>
        Bitte beachten Sie unsere
        <strong class="text-danger">
          Schutzmaßnahmen vor der Ausbreitung des Coronavirus</strong
        >. Die Gefahr einer Ansteckung mit dem neuartigen Coronavirus ist zur
        Zeit hoch.
      </p>

      <h2 class="text-danger">
        Bitte betreten Sie die Praxis nicht sofort, sondern beantworten Sie sich
        erst folgende Fragen:
      </h2>
      <div class="columns text-left">
        <div class="column is-narrow pr-xs" aria-hidden="true">
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
        <div class="column is-narrow pr-xs" aria-hidden="true">
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
      <h3 class="text-danger">
        Haben Sie alle Fragen mit „Nein“ beantwortet, steht Ihrer Behandlung
        nichts im Wege. Sie können Ihre geplanten Termine unverändert
        wahrnehmen.
      </h3>
      <h3 class="text-primary">Achtung: Zutritt nur mit Mund-Nasen-Schutz!</h3>
      <p>Ihr Sebastian Schopplich & Mitarbeiterinnen</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  border: 0.5rem solid var(--color-danger);

  & h2:not(:first-child),
  & h3:not(:first-child) {
    margin-top: 0;
  }
}
</style>
