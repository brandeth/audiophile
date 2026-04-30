<script setup lang="ts">
import heroImageMobileUrl from "~~/assets/images/image-header-mobile.jpg";
import heroImageTabletUrl from "~~/assets/images/image-header-tablet.jpg";
import heroImageDesktopUrl from "~~/assets/images/image-hero.jpg";

const heroStyle = {
  "--mobile-hero-image": `url(${heroImageMobileUrl})`,
  "--tablet-hero-image": `url(${heroImageTabletUrl})`,
  "--desktop-hero-image": `url(${heroImageDesktopUrl})`,
};
</script>

<template>
  <section
    :style="heroStyle"
    class="home-hero relative overflow-hidden text-white"
  >
    <div class="relative mx-auto max-w-[1440px]">
      <div class="md:absolute md:inset-x-0 md:top-0 md:z-20">
        <AppNavbar />
      </div>

      <div
        aria-hidden="true"
        class="home-hero__desktop-image pointer-events-none absolute inset-0 hidden min-[1025px]:block"
      />

      <div class="home-hero__surface relative z-10 flex items-center">
        <div class="mx-auto w-full max-w-[1110px] px-6 md:px-10 xl:px-0">
          <div
            class="grid min-h-[37rem] justify-items-center items-center py-10 sm:min-h-[40rem] sm:py-16 md:max-[1024px]:items-start md:max-[1024px]:py-0 md:max-[1024px]:pb-[8rem] md:max-[1024px]:pt-[13.875rem] min-[1025px]:h-[730px] min-[1025px]:grid-cols-[24.875rem_minmax(0,1fr)] min-[1025px]:justify-items-start min-[1025px]:items-center min-[1025px]:gap-28 min-[1025px]:py-0"
          >
            <div
              class="max-w-[21.875rem] text-center md:max-[1024px]:max-w-[24rem] min-[1025px]:max-w-[24.875rem] min-[1025px]:text-left"
            >
              <p class="text-overline text-white/50">New Product</p>

              <h1
                class="mt-6 text-h4 text-white sm:text-h2 min-[1025px]:text-h1"
              >
                <span class="block">XX99 Mark II</span>
                <span class="block">Headphones</span>
              </h1>

              <p
                class="mt-7 max-w-[21.875rem] text-body text-white/75 min-[1025px]:mx-0 md:max-[1024px]:mx-auto"
              >
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>

              <div class="mt-10 flex justify-center min-[1025px]:justify-start">
                <Button to="/headphones" label="See Product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  background-color: #191919;
}

.home-hero__surface {
  background-image: var(--mobile-hero-image);
  background-position: center -6.5rem;
  background-repeat: no-repeat;
  background-size: 108% auto;
  background-color: #191919;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .home-hero__surface {
    background-image: var(--tablet-hero-image);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #191919;
  }
}

@media (min-width: 1025px) {
  .home-hero {
    background-color: #191919;
  }

  .home-hero__surface {
    background-image: none;
    background-color: transparent;
  }

  .home-hero__desktop-image {
    background-image: var(--desktop-hero-image);
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #191919;
  }
}
</style>
