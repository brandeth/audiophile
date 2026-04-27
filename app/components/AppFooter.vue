<script setup lang="ts">
import { Facebook, Instagram, Twitter } from "lucide-vue-next";
import logoSrc from "~~/assets/images/logo.svg";

const currentYear = new Date().getFullYear();

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Headphones", to: "/headphones" },
  { label: "Speakers", to: "/speakers" },
  { label: "Earphones", to: "/earphones" },
] as const;

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://www.twitter.com", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
] as const;
</script>

<template>
  <footer class="bg-neutral-900 text-white">
    <div
      class="mx-auto max-w-[1110px] px-6 pb-9 text-center md:px-10 md:pb-12 md:text-left lg:pb-12 xl:px-0"
    >
      <div class="mx-auto h-1 w-[101px] bg-brand-500 md:mx-0"></div>

      <div
        class="mt-12 flex flex-col items-center gap-12 md:mt-14 md:items-start lg:mt-16 lg:flex-row lg:items-center lg:justify-between"
      >
        <NuxtLink
          to="/"
          class="inline-flex transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
          aria-label="Audiophile home"
        >
          <img :src="logoSrc" alt="Audiophile" class="h-[25px] w-[143px]" />
        </NuxtLink>

        <nav aria-label="Footer">
          <ul
            class="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-9"
          >
            <li v-for="item in navigationItems" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="text-[13px] font-bold uppercase leading-none tracking-[0.2em] text-white transition-colors duration-200 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div
        class="mt-12 grid gap-12 md:mt-8 md:grid-cols-[minmax(0,33.75rem)_auto] md:items-end md:gap-x-8 md:gap-y-14 lg:mt-9"
      >
        <p class="text-body text-white/50">
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>

        <ul
          class="flex items-center justify-center gap-4 md:col-start-2 md:row-span-2 md:justify-end"
          aria-label="Social links"
        >
          <li v-for="social in socialLinks" :key="social.label">
            <a
              :href="social.href"
              class="flex size-6 items-center justify-center text-white transition-colors duration-200 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
              target="_blank"
              rel="noreferrer"
              :aria-label="social.label"
            >
              <component :is="social.icon" :size="24" :stroke-width="2" />
            </a>
          </li>
        </ul>

        <p class="text-body font-bold text-white/50">
          Copyright {{ currentYear }}. All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
