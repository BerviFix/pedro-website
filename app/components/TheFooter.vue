<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = {
  app: [
    { label: 'Funzionalità', href: '#features' },
    { label: 'Come Funziona', href: '#how-it-works' },
    { label: 'Supermercati', href: '#supermarkets' }
  ],
  support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Stato API', href: '/status' },
    { label: 'Contattaci', href: 'mailto:info.pedroapp@gmail.com' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Termini di Servizio', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' }
  ]
}

const socialLinks = [
  { icon: 'mdi:instagram', href: 'https://www.instagram.com/pedro_shoppinglist', label: 'Instagram' }
]
</script>

<template>
  <footer class="bg-pedro-900 text-white">
    <!-- Main Footer -->
    <div class="section-container section-padding">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
        <!-- Brand Column -->
        <div class="col-span-2 lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <img src="/logo-80.png" alt="Pedro Logo" width="40" height="40" class="w-10 h-10 rounded-xl" />
            <span class="text-xl font-bold">Pedro</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Lista della spesa e confronto prezzi supermercati.
          </p>

          <!-- App Store Buttons -->
          <div class="flex flex-wrap gap-3">
            <a href="https://apps.apple.com/it/app/pedro-lista-della-spesa/id6759045839" target="_blank" rel="noopener" class="btn-app-store group">
              <Icon name="mdi:apple" class="w-6 h-6" />
              <div class="text-left">
                <div class="text-[10px] opacity-75">Scarica su</div>
                <div class="text-sm font-semibold -mt-0.5">App Store</div>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.bervifix.pedro" target="_blank" rel="noopener" class="btn-play-store group">
              <Icon name="mdi:google-play" class="w-6 h-6" />
              <div class="text-left">
                <div class="text-[10px] opacity-75">Disponibile su</div>
                <div class="text-sm font-semibold -mt-0.5">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        <!-- App Links -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">App</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.app" :key="link.href">
              <a :href="link.href" class="text-sm text-gray-300 hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Support Links -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Supporto</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.support" :key="link.href">
              <a :href="link.href" class="text-sm text-gray-300 hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal Links -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Legale</h4>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.legal" :key="link.href">
              <a :href="link.href" class="text-sm text-gray-300 hover:text-white transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-pedro-800">
      <div class="section-container py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm text-gray-500">
            &copy; {{ currentYear }} Pedro. Tutti i diritti riservati.
          </p>

          <p class="text-sm text-gray-500">
            Made with ♥️ by Sgravati from Italy 🍕
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.href"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-pedro-800 flex items-center justify-center text-pedro-400 hover:bg-accent-500 hover:text-white transition-all"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
