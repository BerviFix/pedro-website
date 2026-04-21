<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - Pedro',
  description: 'Informativa sulla privacy di Pedro. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.'
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="section-container section-padding">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl md:text-4xl font-bold text-pedro-900 mb-8">Privacy Policy</h1>

        <div class="prose prose-lg text-gray-600">
          <p class="text-sm text-gray-500 mb-8">Ultimo aggiornamento: {{ new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">1. Introduzione</h2>
            <p>Pedro ("noi", "nostro" o "l'App") si impegna a proteggere la privacy dei propri utenti. Questa Privacy Policy descrive come raccogliamo, utilizziamo e condividiamo le informazioni quando utilizzi la nostra applicazione mobile.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">2. Informazioni che Raccogliamo</h2>
            <p>Raccogliamo le seguenti tipologie di informazioni:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Informazioni dell'account:</strong> email, nome utente quando crei un account</li>
              <li><strong>Dati di utilizzo:</strong> liste della spesa create, ricerche effettuate, preferenze</li>
              <li><strong>Informazioni del dispositivo:</strong> tipo di dispositivo, sistema operativo, identificatori univoci</li>
              <li><strong>Dati di posizione:</strong> solo se autorizzi l'accesso, per mostrarti i supermercati vicini</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">3. Come Utilizziamo le Informazioni</h2>
            <p>Utilizziamo le informazioni raccolte per:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Fornire e migliorare i nostri servizi</li>
              <li>Personalizzare la tua esperienza nell'app</li>
              <li>Confrontare i prezzi tra i supermercati</li>
              <li>Inviarti comunicazioni relative al servizio</li>
              <li>Analizzare l'utilizzo dell'app per migliorarla</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">4. Condivisione delle Informazioni</h2>
            <p>Non vendiamo i tuoi dati personali. Potremmo condividere le informazioni con:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Fornitori di servizi che ci aiutano a operare l'app</li>
              <li>Autorità competenti quando richiesto dalla legge</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">5. I Tuoi Diritti</h2>
            <p>Ai sensi del GDPR, hai il diritto di:</p>
            <ul class="list-disc pl-6 mt-4 space-y-2">
              <li>Accedere ai tuoi dati personali</li>
              <li>Rettificare i dati inesatti</li>
              <li>Cancellare i tuoi dati</li>
              <li>Opporti al trattamento</li>
              <li>Portabilità dei dati</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">6. Sicurezza</h2>
            <p>Adottiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati personali da accessi non autorizzati, perdita o distruzione.</p>
          </section>

          <section class="mb-8">
            <h2 class="text-xl font-semibold text-pedro-900 mb-4">7. Contatti</h2>
            <p>Per domande sulla privacy, contattaci all'indirizzo: <a href="mailto:info.pedroapp@gmail.com" class="text-accent-500 hover:underline">info.pedroapp@gmail.com</a></p>
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
