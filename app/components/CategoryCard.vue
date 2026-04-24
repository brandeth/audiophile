<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

withDefaults(
  defineProps<{
    imageSrc: string;
    title: string;
    to: RouteLocationRaw;
  }>(),
  {},
);
</script>

<template>
  <article
    class="relative h-[204px] w-full max-w-[22rem] rounded-[8px] bg-neutral-100 px-6 pb-10 pt-[5.5rem] md:max-w-none"
  >
    <img
      :src="imageSrc"
      alt=""
      aria-hidden="true"
      class="pointer-events-none absolute left-1/2 top-[1.5rem] h-[160px] w-auto -translate-x-1/2 -translate-y-1/2 object-contain"
    />

    <div class="flex h-full flex-col items-center justify-end text-center">
      <h2 class="text-h6 text-neutral-900">{{ title }}</h2>

      <div class="mt-1">
        <Button :to="to" variant="link" label="Shop" />
      </div>
    </div>
  </article>
</template>
