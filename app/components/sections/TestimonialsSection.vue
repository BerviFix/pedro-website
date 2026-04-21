<script setup lang="ts">
const testimonials = [
  {
    name: 'Maria R.',
    location: 'Milano',
    avatar: 'MR',
    rating: 5,
    text: 'Finalmente un\'app che mi fa risparmiare davvero! Ogni settimana risparmio almeno 10-15 euro sulla spesa. Semplicissima da usare.',
    highlight: 'Risparmio 15€ a settimana'
  },
  {
    name: 'Giuseppe L.',
    location: 'Roma',
    avatar: 'GL',
    rating: 5,
    text: 'La uso ogni volta che vado a fare la spesa. È fantastico vedere subito quale supermercato conviene di più per quello che devo comprare.',
    highlight: 'Uso quotidiano'
  },
  {
    name: 'Francesca M.',
    location: 'Torino',
    avatar: 'FM',
    rating: 5,
    text: 'Con Pedro ho iniziato a pianificare meglio la spesa. Non solo risparmio soldi, ma anche tempo perché vado sempre nel posto giusto.',
    highlight: 'Risparmio tempo e denaro'
  },
  {
    name: 'Andrea B.',
    location: 'Bologna',
    avatar: 'AB',
    rating: 5,
    text: 'App eccezionale! L\'interfaccia è bellissima e funziona perfettamente. Confrontare i prezzi non è mai stato così facile.',
    highlight: 'Design eccellente'
  }
]

const stats = [
  { value: '1K+', label: 'Download' },
  { value: '4.6', label: 'Rating medio', icon: 'mdi:star' },
  { value: '€1K+', label: 'Risparmiati dagli utenti' }
]
</script>

<template>
  <section id="testimonials" class="section-padding bg-white relative overflow-hidden">
    <div class="section-container">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="badge mb-4">Recensioni</span>
        <h2 class="heading-2 text-gray-900 mb-4">
          Amato da chi vuole <span class="text-gradient">risparmiare</span>
        </h2>
        <p class="text-lg text-gray-600">
          Migliaia di italiani usano Pedro per risparmiare sulla spesa ogni settimana. Ecco cosa dicono.
        </p>
      </div>

      <!-- Stats Bar -->
      <div class="flex flex-wrap justify-center gap-8 lg:gap-16 mb-16 p-6 rounded-2xl bg-gradient-to-r from-pedro-50 to-accent-50 border border-pedro-100">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="flex items-center justify-center gap-1 text-3xl font-bold text-gradient mb-1">
            <Icon v-if="stat.icon" :name="stat.icon" class="w-7 h-7 text-gold-500" />
            {{ stat.value }}
          </div>
          <div class="text-sm text-gray-600 font-medium">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="card hover:shadow-pedro transition-all duration-300"
        >
          <!-- Header -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-pedro-500 to-accent-500 flex items-center justify-center text-white font-semibold">
                {{ testimonial.avatar }}
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500">{{ testimonial.location }}</p>
              </div>
            </div>

            <!-- Rating -->
            <div class="flex gap-0.5">
              <Icon
                v-for="i in testimonial.rating"
                :key="i"
                name="mdi:star"
                class="w-5 h-5 text-gold-500"
              />
            </div>
          </div>

          <!-- Quote -->
          <blockquote class="text-gray-600 leading-relaxed mb-4">
            "{{ testimonial.text }}"
          </blockquote>

          <!-- Highlight -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-medium">
            <Icon name="mdi:check-circle" class="w-4 h-4" />
            {{ testimonial.highlight }}
          </div>
        </article>
      </div>

      <!-- App Store Rating -->
      <div class="text-center mt-12">
        <div class="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100">
          <div class="flex gap-0.5">
            <Icon v-for="i in 5" :key="i" name="mdi:star" class="w-6 h-6 text-gold-500" />
          </div>
          <div class="text-left">
            <div class="font-semibold text-gray-900">4.6 su 5</div>
            <div class="text-sm text-gray-500">basato su 500+ recensioni</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
