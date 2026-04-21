<script setup lang="ts">
const benefits = [
  'Completamente gratuito',
  'Nessuna carta richiesta',
  'Inizia a risparmiare subito'
]
</script>

<template>
  <section id="download" class="section-padding relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-pedro-600 via-purple-600 to-accent-600">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <!-- Decorative Elements -->
      <div class="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    </div>

    <div class="section-container relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur mb-8">
          <Icon name="mdi:cart-check" class="w-10 h-10 text-white" />
        </div>

        <!-- Heading -->
        <h2 class="heading-2 text-white mb-6">
          Pronto a risparmiare sulla spesa?
        </h2>
        <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Scarica Pedro gratuitamente e inizia a confrontare i prezzi dei supermercati oggi stesso. Il tuo portafoglio ti ringrazierà!
        </p>

        <!-- Benefits -->
        <div class="flex flex-wrap justify-center gap-6 mb-10">
          <div
            v-for="benefit in benefits"
            :key="benefit"
            class="flex items-center gap-2 text-white/90"
          >
            <Icon name="mdi:check-circle" class="w-5 h-5 text-green-400" />
            <span class="font-medium">{{ benefit }}</span>
          </div>
        </div>

        <!-- App Store Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="https://apps.apple.com/it/app/pedro-lista-della-spesa/id6759045839" target="_blank" rel="noopener" class="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all hover:scale-105 shadow-2xl group">
            <Icon name="mdi:apple" class="w-10 h-10" />
            <div class="text-left">
              <div class="text-xs opacity-75">Scarica su</div>
              <div class="text-xl font-semibold">App Store</div>
            </div>
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.bervifix.pedro" target="_blank" rel="noopener" class="inline-flex items-center gap-4 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all hover:scale-105 shadow-2xl group">
            <Icon name="mdi:google-play" class="w-10 h-10" />
            <div class="text-left">
              <div class="text-xs opacity-75">Disponibile su</div>
              <div class="text-xl font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        <!-- QR Code -->
        <div class="inline-flex flex-col items-center p-6 bg-white rounded-2xl shadow-2xl">
          <img src="/pedro_qr.png" alt="QR Code per scaricare Pedro - App Lista della Spesa" class="w-32 h-32 rounded-xl" width="216" height="216" />
          <p class="text-sm text-gray-600 font-medium mt-3">Scansiona per scaricare</p>
        </div>
      </div>
    </div>
  </section>
</template>
