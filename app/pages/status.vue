<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Stato API Pedro | Monitoraggio Uptime Servizi - Pedro',
  description: 'Controlla lo stato in tempo reale dei servizi e delle API di Pedro. Monitoraggio uptime 24/7 del confronto prezzi supermercati, lista della spesa e tutti i servizi Pedro.',
  ogTitle: 'Pedro API Status - Stato dei Servizi in Tempo Reale',
  ogDescription: 'Monitora lo stato operativo dei servizi Pedro: confronto prezzi, lista della spesa e API. Uptime e prestazioni in tempo reale.',
  ogImage: 'https://pedroshoppinglist.app/og-image.png',
  ogUrl: 'https://pedroshoppinglist.app/status',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Pedro API Status - Stato dei Servizi',
  twitterDescription: 'Controlla lo stato in tempo reale dei servizi e delle API di Pedro.'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://pedroshoppinglist.app/status' }
  ]
})

// Schema.org Structured Data
useSchemaOrg([
  {
    '@type': 'WebPage',
    'name': 'Pedro API Status - Stato dei Servizi',
    'description': 'Pagina di stato in tempo reale dei servizi Pedro. Monitoraggio uptime 24/7 delle API per il confronto prezzi supermercati e la lista della spesa.',
    'url': 'https://pedroshoppinglist.app/status',
    'inLanguage': 'it-IT',
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Pedro',
      'url': 'https://pedroshoppinglist.app'
    },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://pedroshoppinglist.app'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Stato API',
          'item': 'https://pedroshoppinglist.app/status'
        }
      ]
    }
  }
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-cream-50 to-white">
    <!-- Header Spacer -->
    <div class="pt-24 pb-8">
      <div class="section-container">
        <!-- Breadcrumb -->
        <nav aria-label="Breadcrumb" class="mb-6">
          <ol class="flex items-center gap-2 text-sm text-pedro-500">
            <li class="flex items-center">
              <a href="/" class="hover:text-accent-500 transition-colors">Home</a>
            </li>
            <li class="flex items-center">
              <Icon name="mdi:chevron-right" class="w-4 h-4" />
            </li>
            <li class="flex items-center text-pedro-800 font-medium">Stato API</li>
          </ol>
        </nav>

        <!-- Page Header -->
        <div class="text-center max-w-3xl mx-auto mb-8">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-sm font-medium text-green-700">Monitoraggio in tempo reale</span>
          </div>

          <h1 class="heading-2 text-pedro-900 mb-4">
            Pedro <span class="text-gradient">API Status</span>
          </h1>
          <p class="text-lg text-pedro-600 max-w-2xl mx-auto">
            Controlla lo stato operativo di tutti i servizi Pedro in tempo reale. Il nostro sistema di confronto prezzi supermercati e le API sono monitorati 24/7.
          </p>
        </div>
      </div>
    </div>

    <!-- CTA to UptimeRobot -->
    <div class="section-container pb-16">
      <div class="rounded-2xl shadow-soft border border-pedro-100 bg-white p-8 sm:p-12 text-center">
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
          <Icon name="mdi:check-network" class="w-10 h-10 text-green-600" />
        </div>
        <h2 class="text-2xl font-bold text-pedro-900 mb-3">Dashboard Stato Servizi</h2>
        <p class="text-pedro-600 max-w-lg mx-auto mb-8">
          Visualizza uptime, tempi di risposta e storico di tutti i servizi Pedro sulla nostra dashboard di monitoraggio dedicata.
        </p>
        <a
          href="https://stats.uptimerobot.com/Z3cGDS2cWT/802431862"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
        >
          <Icon name="mdi:open-in-new" class="w-6 h-6" />
          Vai allo Stato API
        </a>
      </div>

      <!-- Additional Info -->
      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <div class="card text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center">
            <Icon name="mdi:shield-check" class="w-7 h-7 text-green-600" />
          </div>
          <h2 class="font-semibold text-gray-900 mb-2">Monitoraggio 24/7</h2>
          <p class="text-sm text-gray-600">I nostri servizi sono monitorati continuamente per garantire la massima affidabilita.</p>
        </div>

        <div class="card text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-pedro-100 flex items-center justify-center">
            <Icon name="mdi:flash" class="w-7 h-7 text-pedro-600" />
          </div>
          <h2 class="font-semibold text-gray-900 mb-2">Risposta Rapida</h2>
          <p class="text-sm text-gray-600">Il nostro team interviene rapidamente in caso di anomalie per ripristinare i servizi.</p>
        </div>

        <div class="card text-center">
          <div class="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent-100 flex items-center justify-center">
            <Icon name="mdi:chart-line" class="w-7 h-7 text-accent-600" />
          </div>
          <h2 class="font-semibold text-gray-900 mb-2">Storico Uptime</h2>
          <p class="text-sm text-gray-600">Consulta lo storico di disponibilita dei servizi Pedro degli ultimi 90 giorni.</p>
        </div>
      </div>
    </div>
  </div>
</template>
