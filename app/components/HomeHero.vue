<script setup lang="ts">
import heroImageAltUrl from "~~/assets/images/image-hero-alt.jpg";
</script>

<template>
  <section class="overflow-hidden bg-[#141414] text-white">
    <div class="relative mx-auto max-w-[1440px]">
      <div class="lg:absolute lg:inset-x-0 lg:top-0 lg:z-20">
        <AppNavbar />
      </div>

      <div class="mx-auto max-w-[1110px] px-6 md:px-10 xl:px-0">
        <div
          class="grid min-h-[37rem] items-end pb-[6.75rem] pt-24 sm:min-h-[40rem] sm:pb-[7.5rem] md:min-h-[42rem] md:pb-[8.5rem] md:pt-28 lg:h-[730px] lg:grid-cols-[24.875rem_minmax(0,1fr)] lg:items-center lg:gap-28 lg:pb-0 lg:pt-0"
        >
          <div class="max-w-[21.875rem] text-left lg:max-w-[24.875rem]">
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

          <div class="relative hidden h-full min-w-0 lg:block">
            <img
              :src="heroImageAltUrl"
              alt=""
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
