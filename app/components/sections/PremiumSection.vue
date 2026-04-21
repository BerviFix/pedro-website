<script setup lang="ts">
const freeFeatures = [
  { text: 'Crea liste della spesa illimitate', included: true },
  { text: '3 confronti prezzi inclusi', included: true },
  { text: 'Prodotti precaricati', included: true },
  { text: 'Confronti illimitati', included: false },
  { text: 'Avvisi di prezzo', included: false },
  { text: 'Nutri-Score prodotti', included: false },
  { text: 'Senza pubblicità', included: false }
]

const premiumFeatures = [
  { text: 'Crea liste della spesa illimitate', included: true },
  { text: 'Confronti prezzi illimitati', included: true, highlight: true },
  { text: 'Prodotti precaricati', included: true },
  { text: 'Avvisi quando il prezzo scende', included: true, highlight: true },
  { text: 'Nutri-Score e qualità prodotti', included: true, highlight: true },
  { text: 'Zero pubblicità', included: true, highlight: true }
]
</script>

<template>
  <section id="premium" class="section-padding bg-white relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-pedro-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="section-container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="badge-premium mb-4">
          <Icon name="mdi:crown" class="w-4 h-4" />
          Premium
        </span>
        <h2 class="heading-2 text-gray-900 mb-4">
          Sblocca tutto il potenziale di <span class="text-gradient-gold">Pedro</span>
        </h2>
        <p class="text-lg text-gray-600">
          Risparmia ancora di più con confronti illimitati, avvisi di prezzo e funzionalità esclusive.
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Free Plan -->
        <div class="card-elevated">
          <div class="text-center mb-8">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Gratuito</h3>
            <div class="text-4xl font-bold text-gray-900 mb-2">€0</div>
            <p class="text-gray-500">Per sempre</p>
          </div>

          <ul class="space-y-4 mb-8">
            <li
              v-for="feature in freeFeatures"
              :key="feature.text"
              class="flex items-center gap-3"
            >
              <Icon
                :name="feature.included ? 'mdi:check-circle' : 'mdi:close-circle'"
                :class="feature.included ? 'text-green-500' : 'text-gray-300'"
                class="w-5 h-5 flex-shrink-0"
              />
              <span :class="feature.included ? 'text-gray-700' : 'text-gray-400'">
                {{ feature.text }}
              </span>
            </li>
          </ul>

          <a href="#download" class="btn-secondary w-full justify-center">
            Scarica Gratis
          </a>
        </div>

        <!-- Premium Plan -->
        <div class="card-elevated ring-2 ring-gold-500 relative">
          <!-- Popular Badge -->
          <div class="absolute -top-4 left-1/2 -translate-x-1/2">
            <span class="badge-premium px-4 py-1.5">
              <Icon name="mdi:star" class="w-4 h-4" />
              Più Popolare
            </span>
          </div>

          <div class="text-center mb-8 pt-4">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Premium</h3>
            <div class="flex items-baseline justify-center gap-1 mb-2">
              <span class="text-4xl font-bold text-gradient-gold">€2.99</span>
              <span class="text-gray-500">/mese</span>
            </div>
            <p class="text-gray-500">Cancella quando vuoi</p>
          </div>

          <ul class="space-y-4 mb-8">
            <li
              v-for="feature in premiumFeatures"
              :key="feature.text"
              class="flex items-center gap-3"
            >
              <Icon
                name="mdi:check-circle"
                :class="feature.highlight ? 'text-gold-500' : 'text-green-500'"
                class="w-5 h-5 flex-shrink-0"
              />
              <span :class="feature.highlight ? 'font-medium text-gray-900' : 'text-gray-700'">
                {{ feature.text }}
              </span>
            </li>
          </ul>

          <button class="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
            Passa a Premium
          </button>

          <p class="text-center text-xs text-gray-500 mt-4">
            7 giorni di prova gratuita inclusi
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
