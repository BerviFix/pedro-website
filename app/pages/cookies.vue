<script setup lang="ts">
useSeoMeta({
  title: 'Cookie Policy - Pedro',
  description: 'Informativa sui cookie di Pedro. Scopri quali cookie utilizziamo e come gestire le tue preferenze.'
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="section-container section-padding">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-pedro-900 mb-8">Cookie Policy</h1>

        <div class="prose prose-lg text-gray-600">
          <p class="text-sm text-gray-500 mb-8">Ultimo aggiornamento: {{ new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">1. Cosa Sono i Cookie</h2>
            <p>I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web in modo efficiente e per fornire informazioni ai proprietari del sito.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">2. Cookie che Utilizziamo</h2>
            <p>Utilizziamo le seguenti tipologie di cookie:</p>

            <h3 class="text-lg font-semibold text-pedro-800 mt-6 mb-3">Cookie Tecnici (Necessari)</h3>
            <p>Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati. Includono:</p>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li>Cookie di sessione per mantenere lo stato di accesso</li>
              <li>Cookie per memorizzare le preferenze di sicurezza</li>
            </ul>

            <h3 class="text-lg font-semibold text-pedro-800 mt-6 mb-3">Cookie Analitici</h3>
            <p>Utilizziamo questi cookie per comprendere come gli utenti interagiscono con il nostro sito:</p>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li>Google Analytics per analizzare il traffico del sito</li>
              <li>Cookie per misurare le performance delle pagine</li>
            </ul>

            <h3 class="text-lg font-semibold text-pedro-800 mt-6 mb-3">Cookie di Preferenza</h3>
            <p>Questi cookie permettono al sito di ricordare le tue scelte:</p>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li>Lingua preferita</li>
              <li>Impostazioni di visualizzazione</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">3. Cookie di Terze Parti</h2>
            <p>Alcune funzionalità del nostro sito possono utilizzare cookie di terze parti:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Google Analytics:</strong> per analisi statistiche</li>
              <li><strong>Social Media:</strong> per i pulsanti di condivisione</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">4. Come Gestire i Cookie</h2>
            <p>Puoi controllare e gestire i cookie in diversi modi:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Impostazioni del browser:</strong> La maggior parte dei browser ti permette di rifiutare o accettare i cookie</li>
              <li><strong>Eliminazione dei cookie:</strong> Puoi eliminare i cookie già memorizzati sul tuo dispositivo</li>
              <li><strong>Navigazione privata:</strong> Puoi utilizzare la modalità di navigazione privata</li>
            </ul>
            <p class="mt-4">Nota: la disattivazione di alcuni cookie potrebbe influire sul funzionamento del sito.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">5. Durata dei Cookie</h2>
            <p>I cookie possono essere:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Cookie di sessione:</strong> vengono eliminati quando chiudi il browser</li>
              <li><strong>Cookie persistenti:</strong> rimangono sul dispositivo per un periodo definito (es. 30 giorni, 1 anno)</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">6. Aggiornamenti alla Policy</h2>
            <p>Questa Cookie Policy può essere aggiornata periodicamente. Ti consigliamo di verificarla regolarmente per essere informato su eventuali modifiche.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">7. Contatti</h2>
            <p>Per domande sui cookie, contattaci all'indirizzo: <a href="mailto:info.pedroapp@gmail.com" class="text-accent-500 hover:underline">info.pedroapp@gmail.com</a></p>
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
