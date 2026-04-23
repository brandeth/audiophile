<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <main class="min-h-screen bg-neutral-50 text-black">
    <section class="bg-neutral-900 text-white">
      <AppNavbar />

      <div
        class="mx-auto max-w-[1110px] px-6 py-16 text-center md:px-10 md:py-24 xl:px-0"
      >
        <h1 class="text-h4 sm:text-h2">{{ title }}</h1>
      </div>
    </section>

    <section
      class="mx-auto max-w-[1110px] px-6 py-16 md:px-10 md:py-24 xl:px-0"
    >
      <div
        class="rounded-[2rem] bg-white p-8 shadow-[0_24px_40px_rgba(0,0,0,0.04)] md:p-12"
      >
        <p class="text-overline text-brand-500">Coming Soon</p>
        <h2 class="mt-4 text-h5 text-neutral-900">Category page scaffold</h2>
        <p class="mt-4 max-w-2xl text-body text-neutral-900/70">
          This route is live so the navbar works end-to-end while the first
          implementation pass stays focused on the homepage hero section.
        </p>
        <div class="mt-8">
          <Button to="/" variant="link" label="Back Home" />
        </div>
      </div>
    </section>
  </main>
</template>
