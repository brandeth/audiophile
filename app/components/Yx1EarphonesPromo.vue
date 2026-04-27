<script setup lang="ts">
import earphonesImageSrc from "~~/assets/images/image-earphones-yx1.jpg";
</script>

<template>
  <section class="bg-white">
    <div class="mx-auto max-w-[1110px] px-6 pb-[7.5rem] md:px-10 xl:px-0">
      <div class="grid gap-6 md:grid-cols-2 md:gap-[1.875rem]">
        <div class="overflow-hidden rounded-[8px] bg-neutral-100">
          <img
            :src="earphonesImageSrc"
            alt="YX1 earphones in their charging case"
            class="h-[12.5rem] w-full object-cover md:h-80"
          />
        </div>

        <div
          class="flex min-h-[12.5rem] items-center rounded-[8px] bg-neutral-100 px-6 py-10 md:min-h-80 md:px-[2.5625rem] lg:px-[5.9375rem]"
        >
          <div>
            <h2 class="text-h4 text-black">YX1 Earphones</h2>

            <div class="mt-8">
              <Button to="/earphones" label="See Product" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
