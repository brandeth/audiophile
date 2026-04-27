<script setup lang="ts">
import { computed } from "vue";
import type { RouteLocationRaw } from "vue-router";

const props = withDefaults(
  defineProps<{
    href?: string;
    label?: string;
    to?: RouteLocationRaw;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "dark" | "link";
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
  "group inline-flex w-fit items-center justify-center text-subtitle leading-none transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const buttonVariants = {
  primary:
    "min-h-12 min-w-40 border border-transparent bg-brand-500 px-8 py-4 text-white hover:bg-brand-400 focus-visible:outline-brand-400",
  secondary:
    "min-h-12 min-w-40 border border-black bg-transparent px-8 py-4 text-black hover:bg-black hover:text-white focus-visible:outline-black",
  dark: "min-h-12 min-w-40 border border-transparent bg-black px-8 py-4 text-white hover:border-black hover:bg-transparent focus-visible:outline-black",
  link: "gap-[13px] border-none bg-transparent px-0 py-0 focus-visible:outline-brand-400",
} as const;

const buttonClassName = computed(
  () => `${baseButtonClassName} ${buttonVariants[props.variant]}`,
);

const buttonLabelClassName = computed(() =>
  props.variant === "link"
    ? "text-black/50 transition-colors duration-200 group-hover:text-brand-500 group-focus-visible:text-brand-500"
    : undefined,
);

const showsArrowIcon = computed(() => props.variant === "link");
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClassName">
    <span :class="buttonLabelClassName">
      <slot>{{ label }}</slot>
    </span>
    <svg
      v-if="showsArrowIcon"
      class="h-3 w-2 shrink-0 text-brand-500"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 1L6 6L1 11"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </NuxtLink>

  <a v-else-if="href" :href="href" :class="buttonClassName">
    <span :class="buttonLabelClassName">
      <slot>{{ label }}</slot>
    </span>
    <svg
      v-if="showsArrowIcon"
      class="h-3 w-2 shrink-0 text-brand-500"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 1L6 6L1 11"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>

  <button v-else :type="type" :class="buttonClassName">
    <span :class="buttonLabelClassName">
      <slot>{{ label }}</slot>
    </span>
    <svg
      v-if="showsArrowIcon"
      class="h-3 w-2 shrink-0 text-brand-500"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 1L6 6L1 11"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>
