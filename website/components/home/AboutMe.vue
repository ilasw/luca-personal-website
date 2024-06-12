<script setup lang="ts">
  import {useLocale} from "~/hooks/useLocale";

  const {t} = useLocale()
</script>

<template>
  <section class="my-40">
    <div class="container">
      <div class="text-center mb-10">
        <h2 class="text-6xl font-bold mb-4">{{ t('aboutMe.heading') }}</h2>
        <p class="mx-auto w-3/4 md:w-1/2 text-lg leading-6">{{t('aboutMe.content')}}</p>
      </div>

      <div class="mx-auto w-3/4">
        <ul class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <li class="relative">
            <NuxtImg
                src="/images/me/luca-event.png"
                alt="Luca Pagliaro talking about JavaScript best practices"
                class="image"
                loading="lazy"
                width="400"
                height="400"
                sizes="400"
                format="webp,png"
            />
          </li>
          <li class="relative">
            <NuxtImg
                src="/images/me/luca-wordcamp-2019.jpeg"
                alt="Luca Pagliaro talking at WordCamp Catania 2019"
                class="image"
                loading="lazy"
                width="400"
                height="400"
                sizes="400"
                format="webp,png"
            />
          </li>
          <li class="relative">
            <NuxtImg
                src="/images/me/luca-working-bormio.png"
                alt="Luca Pagliaro working remote from Bormio, Italy"
                class="image"
                loading="lazy"
                width="400"
                height="400"
                sizes="400"
                format="webp,png"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
  .image{
    @apply rounded aspect-square w-full object-cover transition duration-500 group-hover:opacity-90;
    box-shadow: -6px 6px 0 0 #00000020;
  }
</style>