<script setup lang="ts">
import { computed } from "vue";
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    href?: string;
    label?: string;
    to?: RouteLocationRaw;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
  }>(),
  {
    href: undefined,
    label: undefined,
    to: undefined,
    type: "button",
    variant: "primary",
  },
);

const baseButtonClassName =
  "inline-flex min-h-12 w-fit items-center justify-center px-8 py-4 text-subtitle leading-none transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const buttonVariants = {
  primary:
    "border border-transparent bg-brand-500 text-white hover:bg-brand-400 focus-visible:outline-brand-400",
  secondary:
    "border border-black bg-white text-black hover:bg-black hover:text-white focus-visible:outline-black",
} as const;

const buttonClassName = computed(
  () => `${baseButtonClassName} ${buttonVariants[props.variant]}`,
);
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClassName">
    <slot>{{ label }}</slot>
  </NuxtLink>

  <a v-else-if="href" :href="href" :class="buttonClassName">
    <slot>{{ label }}</slot>
  </a>

  <button v-else :type="type" :class="buttonClassName">
    <slot>{{ label }}</slot>
  </button>
</template>
