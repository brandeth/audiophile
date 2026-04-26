<script setup lang="ts">
import speakerImageSrc from "~~/assets/images/image-speaker-zx9.png";
import circlesPatternSrc from "~~/assets/images/pattern-circles.svg";
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-[1110px] px-6 pb-6 md:px-10 md:pb-8 xl:px-0">
      <div
        class="relative isolate grid min-h-[37.5rem] overflow-hidden rounded-[8px] bg-brand-500 px-6 pb-14 pt-[3.4375rem] text-center text-white md:min-h-[45rem] md:px-14 md:pb-16 md:pt-[3.25rem] lg:min-h-[35rem] lg:grid-cols-[minmax(0,1fr)_21.875rem] lg:items-center lg:gap-[8.625rem] lg:px-[5.875rem] lg:pb-0 lg:pt-0 lg:text-left"
      >
        <div
          class="relative mx-auto h-[12.9375rem] w-[12.5rem] md:h-[14.8125rem] md:w-[14.8125rem] lg:mx-0 lg:h-full lg:w-full lg:self-end"
        >
          <img
            :src="circlesPatternSrc"
            alt=""
            class="absolute left-1/2 top-[-7.5rem] z-[-1] w-[34.875rem] max-w-none -translate-x-1/2 md:top-[-17.75rem] md:w-[59rem] lg:left-[-15rem] lg:top-[-2.25rem] lg:w-[59rem] lg:translate-x-0"
          />

          <img
            :src="speakerImageSrc"
            alt="ZX9 speaker"
            class="mx-auto h-full w-auto object-contain lg:absolute lg:bottom-[-0.625rem] lg:left-[1.25rem] lg:h-[30.8125rem]"
          />
        </div>

        <div class="mx-auto mt-8 max-w-[21.875rem] md:mt-16 lg:mx-0 lg:mt-0">
          <h2 class="text-h4 text-white md:text-h1">
            <span class="block">ZX9</span>
            <span class="block">Speaker</span>
          </h2>

          <p class="mt-6 text-body text-white/75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <div class="mt-6 md:mt-10">
            <Button to="/speakers" label="See Product" variant="dark" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
