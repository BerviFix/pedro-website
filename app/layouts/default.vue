<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'min-h-screen'
  }
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
