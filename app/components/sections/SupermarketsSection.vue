<script setup lang="ts">
const supermarkets = [
  { name: 'Esselunga', color: '#E30613', initial: 'ES' },
  { name: 'Conad', color: '#E2001A', initial: 'CO' },
  { name: 'Coop', color: '#E4002B', initial: 'CP' },
  { name: 'Carrefour', color: '#004E9A', initial: 'CA' },
  { name: 'Lidl', color: '#0050AA', initial: 'LI' },
  { name: 'Eurospin', color: '#FFDD00', initial: 'EU', textDark: true },
  { name: 'Pam', color: '#E30613', initial: 'PA' },
  { name: 'Bennet', color: '#009640', initial: 'BE' },
  { name: 'Famila', color: '#C8102E', initial: 'FA' },
  { name: 'MD', color: '#E2001A', initial: 'MD' },
  { name: 'Despar', color: '#C8102E', initial: 'DE' },
  { name: 'Iper', color: '#E30613', initial: 'IP' },
  { name: 'Decò', color: '#CE1126', initial: 'DC' },
  { name: 'Unes', color: '#005CA9', initial: 'UN' },
  { name: 'Basko', color: '#00529C', initial: 'BA' }
]

const otherChains = 'Tigre, Mercatò, Sole365, Emisfero, Conad City, Carrefour Market, Carrefour Express, Coop Alleanza, Coop Lombardia, Ipercoop, Spazio Conad, Panorama, Interspar, Eurospar, Crai, Tigotà, Sigma, Prix, Dpiù, Hurrà, InCoop, Pewex, Il Viaggiator Goloso e molte altre.'
</script>

<template>
  <section id="supermarkets" class="section-padding bg-gray-50 relative overflow-hidden">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="badge mb-4">Supermercati Partner</span>
        <h2 class="heading-2 text-gray-900 mb-4">
          Confronto prezzi <span class="text-gradient">supermercati</span> italiani
        </h2>
        <p class="text-lg text-gray-600">
          Confronto prezzi tra <strong>60+ catene</strong> italiane in <strong>17 regioni</strong> e <strong>60+ province</strong>.
        </p>
      </div>

      <!-- Supermarkets Grid -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <div
          v-for="supermarket in supermarkets"
          :key="supermarket.name"
          class="supermarket-pill"
        >
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold"
            :style="{ backgroundColor: supermarket.color, color: supermarket.textDark ? '#000' : '#fff' }"
          >
            {{ supermarket.initial }}
          </div>
          <span class="font-medium text-gray-700">{{ supermarket.name }}</span>
        </div>
      </div>

      <!-- Other Chains -->
      <p class="text-sm text-gray-500 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        <span class="font-semibold text-gray-700">+ altre catene:</span> {{ otherChains }}
      </p>

      <!-- Info Cards -->
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div class="card text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-pedro-100 flex items-center justify-center">
            <Icon name="mdi:update" class="w-7 h-7 text-pedro-600" />
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Prezzi Aggiornati</h3>
          <p class="text-sm text-gray-600">Aggiorniamo i prezzi regolarmente.</p>
        </div>

        <div class="card text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center">
            <Icon name="mdi:check-decagram" class="w-7 h-7 text-green-600" />
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Prodotti Verificati</h3>
          <p class="text-sm text-gray-600">Ogni prodotto nel database è verificato e categorizzato.</p>
        </div>

        <div class="card text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent-100 flex items-center justify-center">
            <Icon name="mdi:trending-up" class="w-7 h-7 text-accent-600" />
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">In Espansione</h3>
          <p class="text-sm text-gray-600">Aggiungiamo nuovi supermercati e prodotti.</p>
        </div>
      </div>
    </div>
  </section>
</template>
