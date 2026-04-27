<script setup lang="ts">
import imageSrc from "~~/assets/images/image-best-gear.jpg";
</script>

<template>
  <section class="bg-white">
    <div
      class="mx-auto max-w-[1110px] px-6 pb-[7.5rem] md:px-10 md:pb-24 lg:pb-[12.5rem] xl:px-0"
    >
      <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-[7.8125rem]">
        <div
          class="max-w-[35.8125rem] text-center lg:max-w-[27.8125rem] lg:text-left"
        >
          <h2 class="text-h4 text-black md:text-h2">
            Bringing you the
            <span class="text-brand-500">best</span>
            audio gear
          </h2>

          <p class="mt-8 text-body text-black/50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div class="order-first overflow-hidden rounded-[8px] lg:order-none">
          <img
            :src="imageSrc"
            alt="Person enjoying premium headphones"
            class="h-[18.75rem] w-full object-cover md:h-[18.75rem] lg:h-[36.75rem]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
