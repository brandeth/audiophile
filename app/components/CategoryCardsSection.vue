<script setup lang="ts">
import earphonesImageSrc from "~~/assets/images/earphones.png";
import headphoneImageSrc from "~~/assets/images/headphone.png";
import speakerImageSrc from "~~/assets/images/speaker.png";

type CategoryLink = {
  imageClass: string;
  imageSrc: string;
  title: string;
  to: string;
};

const categories = [
  {
    imageSrc: headphoneImageSrc,
    title: "Headphones",
    to: "/headphones",
  },
  {
    imageSrc: speakerImageSrc,
    title: "Speakers",
    to: "/speakers",
  },
  {
    imageSrc: earphonesImageSrc,
    title: "Earphones",
    to: "/earphones",
  },
] satisfies Omit<CategoryLink, "imageClass">[];
</script>

<template>
  <section class="bg-white">
    <div
      class="mx-auto max-w-[1110px] px-6 pb-16 pt-[6.5rem] md:px-10 md:pb-24 md:pt-[7.75rem] xl:px-0"
    >
      <div
        class="grid justify-items-center gap-[4.25rem] md:grid-cols-3 md:justify-items-stretch md:gap-5 lg:gap-[1.875rem]"
      >
        <CategoryCard
          v-for="category in categories"
          :key="category.to"
          :image-src="category.imageSrc"
          :title="category.title"
          :to="category.to"
        />
      </div>
    </div>
  </section>
</template>
