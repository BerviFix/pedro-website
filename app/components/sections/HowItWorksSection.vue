<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Crea la tua lista',
    description: 'Aggiungi i prodotti. Scegli dai precaricati o inserisci i tuoi.',
    icon: 'mdi:plus-circle-outline',
    color: 'pedro'
  },
  {
    number: '02',
    title: 'Confronta i prezzi',
    description: 'Un tap: Pedro confronta i prezzi nei supermercati vicini.',
    icon: 'mdi:compare',
    color: 'purple'
  },
  {
    number: '03',
    title: 'Scegli e risparmia',
    description: 'Scopri il supermercato più conveniente. Vai a fare la spesa informato.',
    icon: 'mdi:cash-multiple',
    color: 'accent'
  }
]
</script>

<template>
  <section id="how-it-works" class="section-padding relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-pedro-900 via-purple-900 to-accent-900">
      <!-- Decorative Elements -->
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-20 left-10 w-72 h-72 bg-pedro-500/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>

    <div class="section-container relative z-10">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-full bg-white/10 text-white/90 border border-white/10 mb-4">
          Come Funziona
        </span>
        <h2 class="heading-2 text-white mb-4">
          Come funziona, in <span class="text-gradient-gold">3 passi</span>
        </h2>
        <p class="text-lg text-white/70">
          Meno di un minuto per iniziare.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="relative"
        >
          <!-- Connector Line (hidden on mobile) -->
          <div
            v-if="index < steps.length - 1"
            class="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent"
          ></div>

          <!-- Step Card -->
          <div class="glass-card bg-white/5 backdrop-blur-sm border-white/10 text-center group hover:bg-white/10 transition-all duration-300">
            <!-- Step Number -->
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 text-white mb-6 group-hover:scale-110 transition-transform">
              <Icon :name="step.icon" class="w-8 h-8" />
            </div>

            <!-- Step Badge -->
            <div class="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium mb-4">
              Passo {{ step.number }}
            </div>

            <!-- Content -->
            <h3 class="text-xl font-semibold text-white mb-3">{{ step.title }}</h3>
            <p class="text-white/60 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
