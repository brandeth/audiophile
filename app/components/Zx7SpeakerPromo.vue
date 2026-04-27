<script setup lang="ts">
import speakerImageSrc from "~~/assets/images/image-speaker-zx7.jpg";

const speakerBackgroundStyle = {
  backgroundImage: `url(${speakerImageSrc})`,
};
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-[1110px] px-6 pb-6 md:px-10 md:pb-8 xl:px-0">
      <div
        :style="speakerBackgroundStyle"
        class="flex min-h-[20rem] items-center overflow-hidden rounded-[8px] bg-neutral-100 bg-cover bg-[position:62%_center] px-6 py-16 md:bg-center md:px-[3.875rem] lg:px-[5.9375rem]"
      >
        <div class="max-w-[12.75rem]">
          <h2 class="text-h4 text-black">ZX7 Speaker</h2>

          <div class="mt-8">
            <Button to="/speakers" label="See Product" variant="secondary" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
