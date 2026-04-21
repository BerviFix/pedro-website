<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Funzionalità', href: '#features' },
  { label: 'Come Funziona', href: '#how-it-works' },
  { label: 'Supermercati', href: '#supermarkets' },
  { label: 'FAQ', href: '#faq' }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-soft py-3'
        : 'bg-transparent py-4'
    ]"
  >
    <div class="section-container">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-3 group">
          <img src="/logo-80.png" alt="Pedro Logo" width="40" height="40" class="w-10 h-10 rounded-xl shadow-pedro group-hover:shadow-pedro-lg transition-shadow" />
          <span class="text-xl font-bold text-pedro-900">Pedro</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-pedro-700 hover:text-accent-500 transition-colors"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center gap-4">
          <a href="#download" class="btn-primary text-sm">
            <Icon name="mdi:download" class="w-5 h-5" />
            Scarica Gratis
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <Icon
            :name="isMobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
            class="w-6 h-6 text-pedro-700"
          />
        </button>
      </nav>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-white shadow-soft-lg border-t border-gray-100 py-4"
        >
          <div class="section-container flex flex-col gap-4">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="closeMobileMenu"
              class="text-base font-medium text-pedro-700 hover:text-accent-500 py-2 transition-colors"
            >
              {{ link.label }}
            </a>
            <a href="#download" @click="closeMobileMenu" class="btn-primary text-center mt-2">
              <Icon name="mdi:download" class="w-5 h-5" />
              Scarica Gratis
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
