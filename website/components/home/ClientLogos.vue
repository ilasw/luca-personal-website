<script setup lang="ts">
import {useLocale} from "~/hooks/useLocale";

const {t} = useLocale();
const companies = import.meta.glob('~/public/images/companies/*.{svg,png}', {eager: true});
const images = Object.entries(companies).map(([key, value]) => ({
  alt: key.split('.').slice(0, -1).join('.').split('/').pop()?.concat(' logo'),
  src: value['default'],
}));
</script>

<template>
  <div class="text-center mt-5">
    <h2 class="uppercase text-neutral-700">{{ t('trustedBy.heading') }}</h2>
    <div class="flex justify-center items-center">
      <ul role="list" class="list">
        <li role="listitem" class="company" v-for="{src, alt} in images">
          <img class="image"
               loading="lazy"
               width="150"
               height="80"
               :alt="alt"
               :src="src"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.list {
  @apply p-5 flex flex-row gap-x-10 overflow-x-auto items-center;
}

.company {
  @apply flex-auto md:flex-1;
}

.image {
  @apply object-contain object-center;
  max-width: 30vw;

  @screen md {
    @apply max-w-full max-h-20;
  }
}
</style>