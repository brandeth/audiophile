<script setup lang="ts">
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div class="min-h-screen bg-neutral-900 text-white">
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
