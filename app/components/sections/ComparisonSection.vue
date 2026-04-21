<script setup lang="ts">
const apps = [
  {
    name: 'Pedro',
    highlight: true,
    rows: {
      focus: 'Confronto prezzi spesa',
      free: 'Sì',
      list: 'Sì',
      compare: 'Sì, per lista intera',
      flyers: 'No',
      nutri: 'Sì',
      scope: '7 catene IT',
      platforms: 'iOS, Android'
    }
  },
  {
    name: 'DoveConviene',
    rows: {
      focus: 'Volantini',
      free: 'Sì',
      list: 'No',
      compare: 'No',
      flyers: 'Sì',
      nutri: 'No',
      scope: 'Volantini multi-settore',
      platforms: 'iOS, Android'
    }
  },
  {
    name: 'Trovaprezzi',
    rows: {
      focus: 'E-commerce',
      free: 'Sì',
      list: 'No',
      compare: 'Su prodotti online',
      flyers: 'No',
      nutri: 'No',
      scope: 'Negozi online',
      platforms: 'iOS, Android, Web'
    }
  },
  {
    name: 'PromoQui',
    rows: {
      focus: 'Volantini',
      free: 'Sì',
      list: 'Lista base',
      compare: 'No',
      flyers: 'Sì',
      nutri: 'No',
      scope: 'Volantini locali',
      platforms: 'iOS, Android, Web'
    }
  }
]

const rowLabels: Record<string, string> = {
  focus: 'Focus',
  free: 'Gratis',
  list: 'Lista della spesa',
  compare: 'Confronto prezzi lista',
  flyers: 'Volantini',
  nutri: 'Nutri-Score',
  scope: 'Copertura',
  platforms: 'Piattaforme'
}
</script>

<template>
  <section id="comparison" class="section-padding bg-white relative overflow-hidden">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="badge mb-4">Confronto</span>
        <h2 class="heading-2 text-gray-900 mb-4">
          Pedro vs altre app di <span class="text-gradient">confronto prezzi</span>
        </h2>
        <p class="text-lg text-gray-600">
          Cosa fa Pedro di diverso da DoveConviene, Trovaprezzi e PromoQui.
        </p>
      </div>

      <!-- Comparison Table -->
      <div class="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-gray-200 shadow-soft">
        <table class="w-full min-w-[640px] text-sm text-left">
          <thead>
            <tr class="border-b border-gray-200 bg-gray-50">
              <th scope="col" class="px-4 py-4 font-semibold text-gray-500">&nbsp;</th>
              <th
                v-for="app in apps"
                :key="app.name"
                scope="col"
                :class="[
                  'px-4 py-4 font-semibold text-center',
                  app.highlight ? 'text-pedro-700 bg-pedro-50' : 'text-gray-700'
                ]"
              >
                {{ app.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(label, key) in rowLabels"
              :key="key"
              class="border-b border-gray-100 last:border-0 hover:bg-gray-50/50"
            >
              <th scope="row" class="px-4 py-3 font-medium text-gray-700">{{ label }}</th>
              <td
                v-for="app in apps"
                :key="app.name + key"
                :class="[
                  'px-4 py-3 text-center',
                  app.highlight ? 'bg-pedro-50/50 font-medium text-pedro-800' : 'text-gray-600'
                ]"
              >
                {{ app.rows[key as keyof typeof app.rows] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Caveat -->
      <p class="text-xs text-gray-500 text-center mt-6 max-w-2xl mx-auto">
        Dati pubblici dei servizi alla data di pubblicazione. I prodotti e le funzionalità delle altre app possono variare.
      </p>
    </div>
  </section>
</template>
