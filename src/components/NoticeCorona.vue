<template>
  <div class="content max-w-screen-md box border-[0.5rem] border-rose-600">
    <div class="prose text-center">
      <h2>
        Sehr geehrte Patienten,<br />wir sind trotz der Corona-Pandemie<br />weiterhin
        für Sie da!
      </h2>
      <p>
        Bitte beachten Sie unsere
        <strong class="text-rose-600">
          Schutzmaßnahmen vor der Ausbreitung des Coronavirus</strong
        >. Die Gefahr einer Ansteckung mit dem neuartigen Coronavirus ist zur
        Zeit hoch.
      </p>

      <h2 class="text-rose-600">
        Bitte betreten Sie die Praxis nicht sofort, sondern beantworten Sie sich
        erst folgende Fragen:
      </h2>
      <div class="columns gap-sm text-left">
        <div class="column-narrow">
          <p>
            <CarbonHelp class="w-7 h-7" aria-hidden="true" />
          </p>
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
      <div class="columns gap-sm text-left">
        <div class="column-narrow">
          <p>
            <CarbonHelp class="w-7 h-7" aria-hidden="true" />
          </p>
        </div>
        <div class="column">
          <p>
            Haben Sie Anzeichen einer Coronavirus-Infektion z. B. Atemnot,
            Husten, Fieber, Halsschmerzen?<br />
          </p>
        </div>
      </div>

      <h3 class="mb-lg">
        Haben Sie eine Frage mit „Ja“ beantwortet? — Rufen Sie bitte unsere
        Praxis per Telefon an:
      </h3>
      <a href="tel:03654204317" class="button-primary-outlined text-center">
        <CarbonPhoneFilled class="mr-1" aria-hidden="true" />
        0365 / 420 43 17
      </a>

      <p>
        Gern besprechen wir dann gemeinsam das weitere Vorgehen und kontaktieren
        Ihren betreuenden Hausarzt.
      </p>
      <h3 class="text-rose-600">
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
.prose {
  & h2:not(:first-child),
  & h3:not(:first-child) {
    margin-top: 0;
  }
}
</style>
