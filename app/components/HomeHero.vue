<script setup lang="ts">
import heroImageHeaderUrl from "~~/assets/images/image-header.jpg";
import heroImageDesktopUrl from "~~/assets/images/image-hero.jpg";

const heroStyle = {
  "--tablet-hero-image": `url(${heroImageHeaderUrl})`,
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

      <div class="home-hero__surface relative z-10">
        <div class="mx-auto max-w-[1110px] px-6 md:px-10 xl:px-0">
          <div
            class="grid min-h-[37rem] items-end pb-[6.75rem] pt-24 sm:min-h-[40rem] sm:pb-[7.5rem] md:max-[1024px]:justify-items-center md:max-[1024px]:items-start md:max-[1024px]:pb-[8rem] md:max-[1024px]:pt-[13.875rem] min-[1025px]:h-[730px] min-[1025px]:grid-cols-[24.875rem_minmax(0,1fr)] min-[1025px]:items-center min-[1025px]:gap-28 min-[1025px]:pb-0 min-[1025px]:pt-0"
          >
            <div
              class="max-w-[21.875rem] text-left md:max-[1024px]:max-w-[24rem] md:max-[1024px]:text-center min-[1025px]:max-w-[24.875rem]"
            >
              <p class="text-overline text-white/50">New Product</p>

              <h1
                class="mt-6 text-h4 text-white sm:text-h2 min-[1025px]:text-h1"
              >
                <span class="block">XX99 Mark II</span>
                <span class="block">Headphones</span>
              </h1>

              <p
                class="mt-7 max-w-[21.875rem] text-body text-white/75 md:max-[1024px]:mx-auto"
              >
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>

              <div
                class="mt-10 md:max-[1024px]:flex md:max-[1024px]:justify-center"
              >
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
  background-color: #141414;
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

  .home-hero__desktop-image {
    background-image: var(--desktop-hero-image);
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: #191919;
  }
}
</style>
