<script setup lang="ts">
useSeoMeta({
  title: 'Termini di Servizio - Pedro',
  description: 'Termini e condizioni di utilizzo dell\'app Pedro. Leggi i termini che regolano l\'uso del nostro servizio.'
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="section-container section-padding">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-pedro-900 mb-8">Termini di Servizio</h1>

        <div class="prose prose-lg text-gray-600">
          <p class="text-sm text-gray-500 mb-8">Ultimo aggiornamento: {{ new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">1. Accettazione dei Termini</h2>
            <p>Utilizzando l'app Pedro, accetti di essere vincolato da questi Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare l'app.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">2. Descrizione del Servizio</h2>
            <p>Pedro è un'applicazione mobile che permette agli utenti di:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Creare e gestire liste della spesa</li>
              <li>Confrontare i prezzi tra diversi supermercati</li>
              <li>Ricevere suggerimenti per risparmiare sulla spesa</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">3. Account Utente</h2>
            <p>Per utilizzare alcune funzionalità dell'app, potrebbe essere necessario creare un account. Sei responsabile di:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Mantenere la riservatezza delle credenziali di accesso</li>
              <li>Tutte le attività che avvengono tramite il tuo account</li>
              <li>Notificarci immediatamente in caso di uso non autorizzato</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">4. Abbonamento Premium</h2>
            <p>Pedro offre un abbonamento Premium con funzionalità aggiuntive:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Il costo dell'abbonamento viene addebitato tramite il tuo account App Store o Google Play</li>
              <li>L'abbonamento si rinnova automaticamente se non viene annullato</li>
              <li>Puoi annullare l'abbonamento in qualsiasi momento dalle impostazioni del tuo dispositivo</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">5. Accuratezza dei Prezzi</h2>
            <p>Ci impegniamo a fornire informazioni sui prezzi accurate e aggiornate. Tuttavia:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>I prezzi possono variare tra diversi punti vendita</li>
              <li>I prezzi potrebbero non riflettere promozioni locali o temporanee</li>
              <li>Non garantiamo l'accuratezza al 100% dei prezzi mostrati</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">6. Uso Consentito</h2>
            <p>Ti impegni a non:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Utilizzare l'app per scopi illegali</li>
              <li>Tentare di accedere a sistemi o dati non autorizzati</li>
              <li>Copiare, modificare o distribuire contenuti dell'app</li>
              <li>Utilizzare bot o sistemi automatizzati per accedere all'app</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">7. Limitazione di Responsabilità</h2>
            <p>Pedro viene fornito "così com'è". Non siamo responsabili per eventuali danni derivanti dall'uso dell'app, inclusi ma non limitati a decisioni di acquisto basate sui prezzi mostrati.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">8. Modifiche ai Termini</h2>
            <p>Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche saranno comunicate tramite l'app o via email.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">9. Legge Applicabile</h2>
            <p>Questi termini sono regolati dalla legge italiana. Per qualsiasi controversia sarà competente il Foro di Milano.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">10. Contatti</h2>
            <p>Per domande sui Termini di Servizio, contattaci all'indirizzo: <a href="mailto:info.pedroapp@gmail.com" class="text-accent-500 hover:underline">info.pedroapp@gmail.com</a></p>
          </section>
        </div>

        <div class="mt-12">
          <NuxtLink to="/" class="text-accent-500 hover:underline flex items-center gap-2">
            <Icon name="mdi:arrow-left" class="w-5 h-5" />
            Torna alla Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
