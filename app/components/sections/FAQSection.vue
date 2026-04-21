<script setup lang="ts">
const faqs = [
  {
    question: 'Come funziona il confronto prezzi di Pedro?',
    answer: 'Pedro confronta i prezzi della tua lista della spesa tra i principali supermercati italiani come Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Basta creare la tua lista, premere "Confronta Prezzi" e in pochi secondi vedrai quale supermercato ti offre il prezzo migliore per la tua spesa.'
  },
  {
    question: 'Pedro è gratuito?',
    answer: 'Sì, Pedro è completamente gratuito da scaricare e usare. La versione gratuita include la creazione della lista della spesa e 3 confronti prezzi. Per confronti illimitati, avvisi di prezzo e altre funzionalità premium, è disponibile l\'abbonamento Pedro Premium a €2.99/mese.'
  },
  {
    question: 'Quali supermercati e zone sono supportati?',
    answer: 'Pedro supporta le principali catene di supermercati in Italia tra cui Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Il servizio è attivo in oltre 17 regioni italiane e più di 60 province, tra cui Lombardia, Lazio, Campania, Emilia-Romagna, Veneto, Piemonte, Toscana, Puglia, Sicilia, Sardegna e molte altre. Stiamo continuamente espandendo la copertura.'
  },
  {
    question: 'I prezzi sono sempre aggiornati?',
    answer: 'I prezzi vengono aggiornati regolarmente per garantire la massima accuratezza. Tuttavia, i prezzi possono variare in base alla località e alle promozioni in corso. Ti consigliamo sempre di verificare i prezzi in negozio.'
  },
  {
    question: 'Posso usare Pedro offline?',
    answer: 'Sì! La tua lista della spesa è sempre disponibile anche senza connessione internet. Il confronto prezzi richiede una connessione attiva, ma una volta effettuato, i risultati rimangono disponibili offline.'
  },
  {
    question: 'Come aggiungo prodotti personalizzati alla lista?',
    answer: 'Oltre ai prodotti precaricati nel database, puoi aggiungere qualsiasi prodotto personalizzato digitandone il nome. I prodotti personalizzati verranno inclusi nella lista ma potrebbero non essere disponibili nel confronto prezzi.'
  },
  {
    question: 'Pedro raccoglie i miei dati personali?',
    answer: 'Pedro richiede solo l\'indirizzo per trovare i supermercati più vicini a te. Non condividiamo i tuoi dati con terze parti. La tua lista della spesa è salvata localmente sul tuo dispositivo. Per maggiori dettagli, consulta la nostra Privacy Policy.'
  },
  {
    question: 'Pedro è disponibile per iPhone e Android?',
    answer: 'Sì, Pedro è disponibile sia su App Store per dispositivi iOS (iPhone e iPad) che su Google Play Store per dispositivi Android. Scarica l\'app gratuitamente e inizia a risparmiare!'
  },
  {
    question: 'Quanto posso risparmiare con Pedro?',
    answer: 'Il risparmio varia in base alla tua lista della spesa e ai supermercati disponibili nella tua zona. In media, i nostri utenti risparmiano tra il 15% e il 30% sulla spesa settimanale, equivalente a circa €40-80 al mese.'
  },
  {
    question: 'Come posso contattare il supporto?',
    answer: 'Puoi contattarci via email a info.pedroapp@gmail.com per qualsiasi domanda, suggerimento o problema tecnico. Rispondiamo generalmente entro 24-48 ore lavorative.'
  },
  {
    question: 'Come fare il confronto prezzi tra supermercati?',
    answer: 'Con Pedro il confronto prezzi supermercati è semplicissimo: scarica l\'app gratis, aggiungi i prodotti alla tua lista della spesa e premi "Confronta Prezzi". In pochi secondi vedrai i prezzi di Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam a confronto, con il calcolo automatico del risparmio per ogni supermercato nella tua zona.'
  },
  {
    question: 'Quale app confronta i prezzi dei supermercati in Italia?',
    answer: 'Pedro è l\'app italiana specializzata nel confronto prezzi supermercati. Confronta i prezzi tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam in oltre 60 province italiane. È gratuita, disponibile per iPhone e Android, e permette di risparmiare fino al 30% sulla spesa settimanale.'
  },
  {
    question: 'Qual è la migliore app per il confronto prezzi supermercati in Italia?',
    answer: 'Pedro è considerata la migliore app per il confronto prezzi supermercati in Italia. Permette di creare la lista della spesa, confrontare i prezzi tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam, e risparmiare fino al 30%. È gratuita, disponibile su iPhone e Android, e attiva in oltre 60 province italiane.'
  },
  {
    question: 'Come posso risparmiare sulla spesa settimanale?',
    answer: 'Con Pedro puoi risparmiare sulla spesa settimanale in modo semplice: crea la tua lista della spesa nell\'app, premi "Confronta Prezzi" e scopri in pochi secondi quale supermercato nella tua zona offre i prezzi migliori. In media gli utenti risparmiano tra il 15% e il 30%, equivalente a circa €40-80 al mese.'
  },
  {
    question: 'Dove conviene fare la spesa questa settimana?',
    answer: 'Con il confronto prezzi supermercati di Pedro puoi scoprire dove conviene fare la spesa nella tua zona. L\'app confronta automaticamente i prezzi della tua lista tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam, mostrandoti il supermercato più economico per i tuoi acquisti specifici.'
  }
]

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="section-padding bg-gray-50">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="badge mb-4">FAQ</span>
        <h2 class="heading-2 text-gray-900 mb-4">
          Domande <span class="text-gradient">Frequenti</span>
        </h2>
        <p class="text-lg text-gray-600">
          Hai domande su Pedro? Trova qui le risposte alle domande più comuni.
        </p>
      </div>

      <!-- FAQ List -->
      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="card p-0 overflow-hidden"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            :aria-expanded="openIndex === index"
          >
            <h3 class="font-semibold text-gray-900 pr-4">{{ faq.question }}</h3>
            <Icon
              name="mdi:chevron-down"
              :class="[
                'w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300',
                openIndex === index && 'rotate-180'
              ]"
            />
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-show="openIndex === index" class="overflow-hidden">
              <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {{ faq.answer }}
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Contact CTA -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">Non hai trovato la risposta che cercavi?</p>
        <a href="mailto:info.pedroapp@gmail.com" class="btn-secondary">
          <Icon name="mdi:email-outline" class="w-5 h-5" />
          Contattaci
        </a>
      </div>
    </div>
  </section>
</template>
