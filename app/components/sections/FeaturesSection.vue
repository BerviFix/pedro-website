<script setup lang="ts">
const features = [
  {
    icon: 'mdi:compare-horizontal',
    title: 'Confronta i Prezzi',
    description: 'Confronta i prezzi della tua lista tra i supermercati vicini. Vedi dove spendi meno.',
    highlight: true
  },
  {
    icon: 'mdi:format-list-checks',
    title: 'Lista Intelligente',
    description: 'Crea la lista della spesa. Scegli dai prodotti precaricati o aggiungi i tuoi.'
  },
  {
    icon: 'mdi:map-marker-radius',
    title: 'Supermercati Vicini',
    description: 'Trova i supermercati vicino a te. Meno giri, meno carburante.'
  },
  {
    icon: 'mdi:piggy-bank',
    title: 'Risparmio Garantito',
    description: 'Vedi quanto spendi in meno scegliendo il supermercato giusto.'
  },
  {
    icon: 'mdi:cellphone-check',
    title: 'Funziona Offline',
    description: 'La tua lista resta disponibile anche senza connessione. I dati si sincronizzano quando torni online.'
  },
  {
    icon: 'mdi:shield-check',
    title: 'Privacy First',
    description: 'Usiamo l\'indirizzo solo per trovare i supermercati vicini. Nient\'altro.'
  }
]
</script>

<template>
  <section id="features" class="section-padding bg-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>

    <div class="section-container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="badge mb-4">Funzionalità</span>
        <h2 class="heading-2 text-gray-900 mb-4">
          Tutto ciò di cui hai bisogno per
          <span class="text-gradient">risparmiare</span>
        </h2>
        <p class="text-lg text-gray-600">
          Ecco cosa fa Pedro.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          :class="[
            'card group cursor-default',
            feature.highlight && 'ring-2 ring-pedro-500 ring-offset-2'
          ]"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Icon -->
          <div :class="[
            'feature-icon mb-5 group-hover:scale-110 transition-transform duration-300',
            feature.highlight && 'shadow-pedro-lg'
          ]">
            <Icon :name="feature.icon" class="w-7 h-7" />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ feature.title }}
            <span v-if="feature.highlight" class="ml-2 badge-premium text-xs py-0.5">Top</span>
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ feature.description }}
          </p>
        </article>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <a href="#download" class="btn-primary">
          <Icon name="mdi:rocket-launch" class="w-5 h-5" />
          Inizia a Risparmiare
        </a>
      </div>
    </div>
  </section>
</template>
