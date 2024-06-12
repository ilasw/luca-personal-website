<script setup lang="ts">
import {useLocale} from "~/hooks/useLocale";

const {t} = useLocale();
</script>

<template>
  <section class="Hero">
    <div class="container text-center">
      <h1 class="sr-only">{{ t('hero.title') }}</h1>
      <NuxtImg
          alt="Photo showing Luca Pagliaro with a badge during a conference"
          class="image"
          height="120"
          width="120"
          src="/images/me/luca-pagliaro-catania.jpeg"
          sizes="120px"
          format="webp,jpg"
      />
      <p class="w-3/4 md:w-7/12 mx-auto font-medium">
        <span class="block headline mb-10 shadow shadow-amber-50">{{ t('hero.headline') }}</span>
        <span class="block">
          <a class="cta"
             href="https://www.linkedin.com/in/lucapagliaro/"
             target="_blank"
             rel="nofollow noopener noreferrer"
             title="Chat with me on LinkedIn"
             aria-label="Chat with me on LinkedIn"
          >{{ t('hero.cta') }}</a>
        </span>
      </p>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.Hero {
  @apply py-20 flex flex-col justify-center;
  min-height: 70vh;
  min-height: 70svh;
}

.image {
  @apply object-center object-cover rounded -rotate-6 mx-auto mb-10;
  box-shadow: -6px 6px 0 0 #00000020;
}

.headline {
  font-size: clamp(1.5rem, 2vw, 4rem);
  line-height: 1.2;
}
</style>