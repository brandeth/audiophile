<template>
  <div class="min-h-screen bg-neutral-900 px-6 py-16 text-white">
    <NuxtRouteAnnouncer />

    <main
      class="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur sm:p-12"
    >
      <div class="space-y-4">
        <p class="text-overline text-brand-500">Audiophile</p>

        <h1 class="max-w-3xl text-h4 text-balance sm:text-h2">
          Manrope typography is installed and ready for the ecommerce build.
        </h1>

        <p class="max-w-2xl text-body text-neutral-100">
          This is a temporary verification screen so we can confirm the utility
          pipeline, the default font family, and the custom type scale are all
          wired correctly before adding the rest of the design system.
        </p>
      </div>

      <section class="grid gap-4 md:grid-cols-3">
        <article
          class="rounded-3xl border border-neutral-900/10 bg-neutral-100 p-5 text-neutral-900"
        >
          <p class="text-subtitle">Subtitle</p>
          <p class="mt-3 text-h6">Manrope Bold</p>
        </article>

        <article
          class="rounded-3xl border border-neutral-900/10 bg-neutral-50 p-5 text-neutral-900"
        >
          <p class="text-subtitle">Body</p>
          <p class="mt-3 text-body">
            Manrope Medium at 15px with 25px line height.
          </p>
        </article>

        <article
          class="rounded-3xl border border-brand-400 bg-brand-500 p-5 text-white"
        >
          <p class="text-subtitle text-brand-400">Overline</p>
          <p class="mt-3 text-overline">Audiophile</p>
        </article>
      </section>

      <section
        class="space-y-4 rounded-3xl border border-white/10 bg-neutral-900 p-6"
      >
        <p class="text-subtitle text-neutral-100">CTA preview</p>

        <div class="flex flex-wrap gap-4">
          <Button label="See Product" />
          <Button to="/" label="See Product" />
          <Button variant="secondary" label="See Product" />
        </div>
      </section>
    </main>
  </div>
</template>
