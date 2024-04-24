<script setup lang="ts">
import {useLocale} from "~/hooks/useLocale";

const {t} = useLocale();
</script>

<template>
  <section class="Hero">
    <div class="container text-center">
      <h1 class="title font-bold">{{ t('hero.title') }}</h1>
      <p class="text-lg md:w-7/12 mx-auto font-light">
        <span class="block md:text-2xl mb-8">{{ t('hero.headline') }}</span>
        <span class="block">
          <a class="cta"
             href="https://www.linkedin.com/in/lucapagliaro/"
             target="_blank"
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
  @apply py-20 items-center;
  min-height: 70vh;
  min-height: 70svh;
}

.title {
  font-size: clamp(3rem, 7vw, 8rem);
}
</style>