<script setup lang="ts">
import { ref, watch } from "vue";
import logoSrc from "~~/assets/images/logo.svg";

const route = useRoute();
const isMobileMenuOpen = ref(false);

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Headphones", to: "/headphones" },
  { label: "Speakers", to: "/speakers" },
  { label: "Earphones", to: "/earphones" },
] as const;

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const isRouteActive = (to: string) =>
  to === "/" ? route.path === "/" : route.path.startsWith(to);

watch(
  () => route.path,
  () => {
    closeMobileMenu();
  },
);
</script>

<template>
  <header
    class="relative z-30 border-b border-[#979797]/20 bg-transparent text-white"
  >
    <div class="mx-auto max-w-[1110px] px-6 md:px-10 xl:px-0">
      <div class="relative flex h-24 items-center">
        <button
          type="button"
          class="flex size-12 items-center justify-center text-white transition-colors duration-200 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 min-[1025px]:hidden"
          aria-controls="mobile-navigation"
          :aria-expanded="isMobileMenuOpen"
          :aria-label="
            isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          "
          @click="toggleMobileMenu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            class="size-4"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 1H16M0 7.5H16M0 14H16"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>

          <svg
            v-else
            class="size-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 1L15 15M15 1L1 15"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </button>

        <NuxtLink
          to="/"
          class="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 min-[1025px]:static min-[1025px]:translate-x-0 min-[1025px]:translate-y-0"
          aria-label="Audiophile home"
        >
          <img :src="logoSrc" alt="Audiophile" class="h-[25px] w-[143px]" />
        </NuxtLink>

        <nav
          class="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 min-[1025px]:block"
          aria-label="Primary"
        >
          <ul class="flex items-center gap-9">
            <li v-for="item in navigationItems" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="text-[13px] font-bold uppercase leading-none tracking-[0.2em] text-white transition-colors duration-200 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
                :class="isRouteActive(item.to) ? 'text-brand-500' : ''"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          class="ml-auto flex size-12 items-center justify-center text-white transition-colors duration-200 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
          aria-label="View cart"
        >
          <svg
            class="h-5 w-[23px]"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8.625 18.9015C9.49632 18.9015 10.2026 18.1952 10.2026 17.3239C10.2026 16.4526 9.49632 15.7463 8.625 15.7463C7.75368 15.7463 7.04736 16.4526 7.04736 17.3239C7.04736 18.1952 7.75368 18.9015 8.625 18.9015Z"
              fill="currentColor"
            />
            <path
              d="M19.6748 18.9015C20.5461 18.9015 21.2524 18.1952 21.2524 17.3239C21.2524 16.4526 20.5461 15.7463 19.6748 15.7463C18.8035 15.7463 18.0972 16.4526 18.0972 17.3239C18.0972 18.1952 18.8035 18.9015 19.6748 18.9015Z"
              fill="currentColor"
            />
            <path
              d="M0.999969 1.10547H4.04576L6.81575 13.6423H20.9375L22 5.64158H6.39471"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-2 opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="min-[1025px]:hidden">
        <div
          class="fixed inset-0 top-24 bg-black/45 backdrop-blur-[2px]"
          aria-hidden="true"
          @click="closeMobileMenu"
        ></div>

        <div class="absolute inset-x-0 top-full px-6 md:px-10">
          <nav
            id="mobile-navigation"
            class="mt-4 rounded-3xl border border-white/10 bg-neutral-900/95 px-6 py-6 text-white shadow-[0_24px_64px_rgba(0,0,0,0.45)] backdrop-blur"
            aria-label="Mobile primary"
          >
            <ul class="flex flex-col gap-2">
              <li v-for="item in navigationItems" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  class="flex min-h-12 items-center rounded-2xl px-4 text-[13px] font-bold uppercase leading-none tracking-[0.2em] transition-colors duration-200 hover:bg-white/5 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                  :class="
                    isRouteActive(item.to)
                      ? 'bg-white/5 text-brand-500'
                      : 'text-white/80'
                  "
                  @click="closeMobileMenu"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>
