<script setup lang="ts">
const stats = [
  { value: '60+', label: 'Catene Supermercati' },
  { value: '17', label: 'Regioni' },
  { value: '60+', label: 'Province' }
]
</script>

<template>
  <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-50 to-white">
      <!-- Decorative Blobs -->
      <div class="blob w-96 h-96 bg-pedro-200 top-20 -left-48"></div>
      <div class="blob w-80 h-80 bg-accent-200 bottom-20 right-10"></div>
      <div class="blob w-64 h-64 bg-pedro-300 top-1/2 left-1/3"></div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
    </div>

    <div class="section-container relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-pedro-100 mb-6 animate-fade-in">
            <span class="flex h-2 w-2 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-sm font-medium text-pedro-700">Nuova app disponibile</span>
          </div>

          <!-- Heading -->
          <h1 class="heading-1 text-pedro-900 mb-6 animate-fade-in-up">
            La spesa
            <span class="text-gradient">intelligente</span>
            che ti fa
            <span class="text-gradient">risparmiare</span>
          </h1>

          <!-- Subheading -->
          <p class="text-lg sm:text-xl text-pedro-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style="animation-delay: 0.1s">
            Confronta i prezzi tra <strong class="text-pedro-800">Esselunga, Conad, Coop, Carrefour, Lidl, Eurospin, Pam, Bennet, Famila</strong> e altre 50+ catene italiane. Paga meno la spesa ogni settimana.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in-up" style="animation-delay: 0.2s">
            <a href="#download" class="btn-primary text-lg px-8 py-4">
              <Icon name="mdi:download" class="w-6 h-6" />
              Scarica Gratis
            </a>
            <a href="#how-it-works" class="btn-secondary text-lg px-8 py-4">
              <Icon name="mdi:play-circle-outline" class="w-6 h-6" />
              Come Funziona
            </a>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-8 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.3s">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-3xl font-bold text-gradient">{{ stat.value }}</div>
              <div class="text-sm text-pedro-500 font-medium">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Phone Mockup -->
        <div class="relative flex justify-center lg:justify-end animate-float">
          <div class="relative">
            <!-- Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 rounded-[3rem] blur-3xl opacity-20 scale-110"></div>

            <!-- Phone Frame -->
            <div class="phone-mockup relative">
              <div class="phone-screen aspect-[9/19.5] w-64 sm:w-72">
                <!-- App Screenshot Placeholder -->
                <div class="w-full h-full bg-gradient-to-b from-cream-100 to-white p-4 flex flex-col">
                  <!-- App Header -->
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2">
                      <img src="/logo-80.png" alt="Pedro" width="32" height="32" class="w-8 h-8 rounded-lg" />
                      <span class="font-semibold text-pedro-800">Pedro</span>
                    </div>
                    <Icon name="mdi:cog-outline" class="w-5 h-5 text-pedro-400" />
                  </div>

                  <!-- Shopping List -->
                  <div class="flex-1 space-y-3">
                    <div class="text-xs font-semibold text-pedro-500 uppercase tracking-wide mb-2">Da comprare</div>

                    <div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-pedro-100">
                      <div class="w-5 h-5 rounded border-2 border-pedro-300 flex-shrink-0"></div>
                      <span class="text-sm text-pedro-700">Pane integrale</span>
                    </div>

                    <div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-pedro-100">
                      <div class="w-5 h-5 rounded border-2 border-pedro-300 flex-shrink-0"></div>
                      <span class="text-sm text-pedro-700">Latte fresco</span>
                    </div>

                    <div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-pedro-100">
                      <div class="w-5 h-5 rounded border-2 border-pedro-300 flex-shrink-0"></div>
                      <span class="text-sm text-pedro-700">Mozzarella</span>
                    </div>

                    <div class="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-pedro-100">
                      <div class="w-5 h-5 rounded border-2 border-pedro-300 flex-shrink-0"></div>
                      <span class="text-sm text-pedro-700">Pomodori</span>
                    </div>
                  </div>

                  <!-- Compare Button -->
                  <div class="mt-4">
                    <button class="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl font-semibold text-sm shadow-accent">
                      Confronta Prezzi
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Cards -->
            <div class="absolute -left-16 top-1/4 glass-card p-3 animate-float-delayed hidden sm:block">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon name="mdi:check" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div class="text-xs text-pedro-500">Risparmio</div>
                  <div class="text-sm font-bold text-green-600">-€12.50</div>
                </div>
              </div>
            </div>

            <div class="absolute -right-12 bottom-1/3 glass-card p-3 animate-float hidden sm:block">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white text-xs font-bold">ES</div>
                <div>
                  <div class="text-xs text-pedro-500">Esselunga</div>
                  <div class="text-sm font-bold text-pedro-800">€45.90</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
      <a href="#features" class="flex flex-col items-center gap-2 text-pedro-400 hover:text-accent-500 transition-colors">
        <span class="text-xs font-medium">Scopri di più</span>
        <Icon name="mdi:chevron-down" class="w-6 h-6" />
      </a>
    </div>
  </section>
</template>
