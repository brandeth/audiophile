<script setup lang="ts">
import defaultImageSrc from "~~/assets/images/image-best-gear.jpg";
import tabletImageSrc from "~~/assets/images/image-best-gear-tablet.jpg";
</script>

<template>
  <section class="bg-white">
    <div
      class="mx-auto max-w-[1110px] px-6 pb-[7.5rem] md:px-10 md:pb-24 lg:pb-[12.5rem] xl:px-0"
    >
      <div
        class="grid items-center gap-10 md:max-[1024px]:gap-[3.9375rem] min-[1025px]:grid-cols-2 min-[1025px]:gap-[7.8125rem]"
      >
        <div
          class="mx-auto max-w-[35.8125rem] text-center min-[1025px]:mx-0 min-[1025px]:max-w-[27.8125rem] min-[1025px]:text-left"
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

        <div
          class="order-first overflow-hidden rounded-[8px] min-[1025px]:order-none"
        >
          <picture class="block">
            <source
              media="(min-width: 768px) and (max-width: 1024px)"
              :srcset="tabletImageSrc"
            />

            <img
              :src="defaultImageSrc"
              alt="Person enjoying premium headphones"
              class="h-[18.75rem] w-full object-cover min-[1025px]:h-[36.75rem]"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>
