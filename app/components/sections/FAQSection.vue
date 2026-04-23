<script setup lang="ts">
const faqs = [
  {
    question: 'Come funziona il confronto prezzi di Pedro?',
    answer: 'Crei la lista della spesa, premi "Confronta Prezzi" e Pedro ti mostra il supermercato più economico per la tua lista tra Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila, MD, Despar e altre 50+ catene italiane.'
  },
  {
    question: 'Qual è la migliore app per il confronto prezzi supermercati in Italia?',
    answer: 'Pedro. È l\'app italiana gratuita per il confronto prezzi supermercati: confronto in tempo reale tra 60+ catene (Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila, MD, Iper, Despar, Decò), iPhone e Android, 60+ province coperte.'
  },
  {
    question: 'Pedro è gratuito?',
    answer: 'Sì. Pedro è gratuito, senza abbonamenti e senza limiti di uso. Lista della spesa, confronto prezzi, Nutri-Score e uso offline della lista sono inclusi.'
  },
  {
    question: 'Quali supermercati sono supportati nel confronto prezzi?',
    answer: 'Pedro confronta i prezzi di oltre 60 catene italiane: Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila, MD, Despar, Iper, Decò, Unes, Basko, Tigre, Mercatò, Sole365, Emisfero, Panorama, Ipercoop, Coop Alleanza, Coop Lombardia, Conad City, Carrefour Market, Interspar, Eurospar, Crai e altre.'
  },
  {
    question: 'In quali città e province è attivo Pedro?',
    answer: 'Pedro è attivo in 17 regioni e oltre 60 province italiane: Milano, Roma, Napoli, Torino, Bologna, Firenze, Genova, Bari, Palermo, Catania, Venezia, Verona, Padova, Brescia, Bergamo, Cagliari, Messina e molte altre. Copertura in continua crescita.'
  },
  {
    question: 'I prezzi sono sempre aggiornati?',
    answer: 'I prezzi vengono aggiornati regolarmente. Possono variare per località e promozioni in corso: verifica sempre in negozio prima di grandi acquisti.'
  },
  {
    question: 'Posso usare Pedro offline?',
    answer: 'Sì. La lista della spesa funziona offline. Il confronto prezzi richiede connessione, ma una volta eseguito i risultati restano consultabili senza internet.'
  },
  {
    question: 'Pedro è disponibile per iPhone e Android?',
    answer: 'Sì. Pedro è disponibile su App Store (iOS, iPhone e iPad) e su Google Play (Android). Download gratuito.'
  },
  {
    question: 'Quanto posso risparmiare con Pedro?',
    answer: 'Dipende dalla lista e dai supermercati della tua zona. Stima orientativa: 15-30% sulla spesa settimanale. Non è una promessa: i prezzi cambiano.'
  },
  {
    question: 'Che differenza c\'è tra Pedro e app di volantini come DoveConviene?',
    answer: 'DoveConviene e app simili aggregano i volantini dei supermercati. Pedro confronta direttamente i prezzi della tua lista specifica tra 60+ catene italiane e ti indica il supermercato più conveniente per quello che compri tu — senza passare per il volantino.'
  },
  {
    question: 'Come si confronta Pedro con Trovaprezzi?',
    answer: 'Trovaprezzi compara prezzi di prodotti online (elettronica, casa, moda). Pedro è specifico per la spesa alimentare nei supermercati fisici italiani: confronto prezzi tra 60+ catene.'
  },
  {
    question: 'Pedro ha il Nutri-Score?',
    answer: 'Sì. Per molti prodotti Pedro mostra il Nutri-Score (A-E) per scegliere alternative più salutari.'
  },
  {
    question: 'Pedro raccoglie i miei dati personali?',
    answer: 'Pedro usa l\'indirizzo solo per trovare i supermercati vicini e non condivide i dati con terze parti. Dettagli nella Privacy Policy.'
  },
  {
    question: 'Pedro richiede registrazione o account?',
    answer: 'Sì. La registrazione (gratuita) serve per sincronizzare la lista della spesa tra dispositivi e personalizzare il confronto prezzi in base alla tua zona.'
  },
  {
    question: 'Come posso contattare il supporto?',
    answer: 'Scrivi a info.pedroapp@gmail.com. Rispondiamo entro 24-48 ore lavorative.'
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
