<script setup lang="ts">
import heroImageUrl from "~~/assets/images/image-hero.jpg";

const heroImageStyle = {
  "--hero-image": `url(${heroImageUrl})`,
};
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#141414] text-white">
    <div
      class="hero-image pointer-events-none absolute inset-0"
      :style="heroImageStyle"
    ></div>
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.12),transparent_26%)]"
    ></div>
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,16,0.14)_0%,rgba(16,16,16,0.58)_56%,rgba(16,16,16,0.88)_82%,rgba(16,16,16,1)_100%)] lg:bg-[linear-gradient(90deg,rgba(16,16,16,1)_0%,rgba(16,16,16,0.98)_24%,rgba(16,16,16,0.92)_38%,rgba(16,16,16,0.6)_56%,rgba(16,16,16,0.2)_76%,rgba(16,16,16,0)_100%)]"
    ></div>

    <div class="relative">
      <AppNavbar />

      <div class="mx-auto max-w-[1110px] px-6 md:px-10 xl:px-0">
        <div
          class="mx-auto flex min-h-[37rem] w-full max-w-[21.875rem] flex-col items-start justify-end pb-[6.75rem] pt-24 text-left sm:min-h-[40rem] sm:pb-[7.5rem] md:min-h-[42rem] md:pb-[8.5rem] md:pt-28 lg:mx-0 lg:min-h-[39rem] lg:max-w-[25rem] lg:justify-center lg:pb-0 lg:pt-0"
        >
          <p class="text-overline text-white/50">New Product</p>

          <h1 class="mt-6 text-h4 text-white sm:text-h2 lg:text-h1">
            <span class="block">XX99 Mark II</span>
            <span class="block">Headphones</span>
          </h1>

          <p class="mt-7 max-w-[21.875rem] text-body text-white/75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <div class="mt-10">
            <Button to="/headphones" label="See Product" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-image {
  background-image: var(--hero-image);
  background-position: center -1.5rem;
  background-repeat: no-repeat;
  background-size: 145% auto;
}

@media (min-width: 640px) {
  .hero-image {
    background-position: center -2rem;
    background-size: 132% auto;
  }
}

@media (min-width: 768px) {
  .hero-image {
    background-position: center top;
    background-size: 118% auto;
  }
}

@media (min-width: 1024px) {
  .hero-image {
    background-position: calc(100% + 7rem) center;
    background-size: auto 100%;
  }
}

@media (min-width: 1280px) {
  .hero-image {
    background-position: calc(100% + 4rem) center;
  }
}
</style>
