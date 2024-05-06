<script setup lang="ts">

import {useLocale} from "~/hooks/useLocale";
import {useScrollTranslate} from "~/hooks/useScrollTranslate";

const {t} = useLocale();
const services = t<Array<{
  title: string,
  description: string,
  items: string[],
  image?: string,
}>>('services.items');

const {wrapperEl, element} = useScrollTranslate({
  minScrollPercentage: 35,
  maxScrollPercentage: 61
});

</script>

<template>
  <section class="my-40 bg-neutral-100 md:my-20 min-h-screen">
    <div class="sticky top-0">
      <div class="intro"
           role="presentation"
           ref="wrapperEl"
      >
        <div class="headline">
          <div class="headline-inner" ref="element">
            <h2>Explore my services</h2>
          </div>
        </div>
      </div>

      <div class="container" id="services">
        <h2 class="text-4xl font-bold max-w-lg mx-auto text-center">{{ t('services.heading') }}</h2>
        <div class="py-20 pb-36 relative">
          <div class="grid grid-cols-1 gap-8">
            <template v-for="(service, index) in services" :key="index">
              <div
                  class="md:sticky max-w-3xl mx-auto rounded-2xl bg-neutral-50 border-8 border-white px-8 py-10 shadow-neutral-300 shadow-2xl"
                  :style="`top: calc(8rem + ${index}rem)`"
              >
                <div class="flex flex-row justify-between">
                  <div class="">
                    <h3 class="text-3xl font-bold mb-2">{{ service.title }}</h3>
                    <p class="text-lg leading-6 font-light">{{ service.description }}</p>
                    <ul role="list" class="flex flex-col gap-4 mt-10">
                      <li v-for="item in service.items"
                          class="p-4 bg-white rounded-lg border border-neutral-100 flex gap-4"
                      >
                        <NuxtImg
                            alt="Star icon"
                            aria-hidden="true"
                            class="aspect-square w-5 h-5"
                            height="20"
                            role="presentation"
                            width="20"
                            src="/images/star.svg"
                        />
                        <span>{{ item }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="hidden md:block">
                    <NuxtImg v-if="service.image"
                             :src="service.image"
                             height="250"
                             loading="lazy"
                             width="250"
                             class=" object-center"
                    />
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.intro {
  @apply relative;
  padding-bottom: 15vmax;
  margin-bottom: -15vmax;

  .headline {
    @apply overflow-hidden flex flex-nowrap;

    &-inner {
      @apply font-bold uppercase whitespace-nowrap opacity-20 flex flex-nowrap items-center;
      font-size: 20vw;
      margin: 25vmax 8vmax 10vmax;

      @screen md {
        margin: 5vmax 8vmax 0;
      }
    }
  }
}

#services {
  scroll-margin: 60vh;
}
</style>