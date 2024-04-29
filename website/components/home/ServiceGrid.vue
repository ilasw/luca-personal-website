<script setup lang="ts">

import {useLocale} from "~/hooks/useLocale";
import {useScrollTranslate} from "~/hooks/useScrollTranslate";

const {t} = useLocale();
const services = t<Array<{
  title: string,
  description: string,
  items: string[]
}>>('services.items');

const wrapperEl = ref();
const element = ref();
useScrollTranslate({
  wrapperEl,
  element,
  minScrollPercentage: 10,
  maxScrollPercentage: 60
});

</script>

<template>
  <section class="my-40 md:my-20 bg-neutral-800 text-white min-h-screen">
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
      <div class="py-20">
        <h2 class="text-2xl font-medium">{{ t('services.heading') }}</h2>
        <div class="flex flex-col gap-4 lg:gap-6">
          <div class="service"
               v-for="service in services"
          >
            <h3 class="text-xl font-medium uppercase">{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul v-if="service?.items?.length">
              <li class="ml-4 list-disc" v-for="item in service.items">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

.intro {
  @apply relative;
  min-height: 150vh;
  padding-bottom: 10%;
  margin-bottom: -10%;

  .headline {
    @apply sticky top-0 overflow-hidden z-0 flex flex-nowrap;

    &-inner {
      @apply font-bold uppercase whitespace-nowrap opacity-10 flex flex-nowrap items-center;
      font-size: 20vw;
      margin: 5vmax 8vmax;
    }
  }
}

#services {
  scroll-margin: 60vh;
}
</style>