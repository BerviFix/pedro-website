<script setup lang="ts">
const faqs = [
  {
    question: 'Come funziona il confronto prezzi di Pedro?',
    answer: 'Crei la lista della spesa. Premi "Confronta Prezzi". Pedro mostra il supermercato più economico tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam.'
  },
  {
    question: 'Pedro è gratuito?',
    answer: 'Sì. Pedro è gratuito, senza account e senza limiti. Lista della spesa, confronti prezzi, Nutri-Score e uso offline sono inclusi.'
  },
  {
    question: 'Quali supermercati e zone sono supportati?',
    answer: 'Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Attivo in 17 regioni e 60+ province: Lombardia, Lazio, Campania, Emilia-Romagna, Veneto, Piemonte, Toscana, Puglia, Sicilia, Sardegna e altre. Copertura in crescita.'
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
    answer: 'Dipende dalla tua lista e dai supermercati della tua zona. Stima orientativa: 15-30% sulla spesa settimanale. Non è una promessa: i prezzi cambiano.'
  },
  {
    question: 'Come posso contattare il supporto?',
    answer: 'Puoi contattarci via email a info.pedroapp@gmail.com per qualsiasi domanda, suggerimento o problema tecnico. Rispondiamo generalmente entro 24-48 ore lavorative.'
  },
  {
    question: 'Come fare il confronto prezzi tra supermercati?',
    answer: 'Scarica Pedro. Aggiungi i prodotti alla lista. Premi "Confronta Prezzi". Vedi il confronto tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam con il risparmio per supermercato.'
  },
  {
    question: 'Quale app confronta i prezzi dei supermercati in Italia?',
    answer: 'Pedro. Confronta i prezzi tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam in 60+ province. Gratis, per iPhone e Android.'
  },
  {
    question: 'Qual è la migliore app per il confronto prezzi supermercati in Italia?',
    answer: 'Pedro è tra le app gratuite italiane specifiche per il confronto prezzi supermercati. Lista della spesa, confronto tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam, 60+ province. iPhone e Android.'
  },
  {
    question: 'Come posso risparmiare sulla spesa settimanale?',
    answer: 'Crea la lista nella app. Premi "Confronta Prezzi". Vai dove costa meno.'
  },
  {
    question: 'Dove conviene fare la spesa questa settimana?',
    answer: 'Pedro confronta i prezzi della tua lista tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin e Pam. Ti dice dove conviene per quello che compri tu.'
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
