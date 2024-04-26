<script setup lang="ts">

import {useLocale} from "~/hooks/useLocale";

const {t} = useLocale();
const services = t<Array<{
  title: string,
  description: string,
  items: string[]
}>>('services.items');
</script>

<template>
  <section class="my-10 md:my-20">
    <div class="container">
      <h2 class="text-2xl font-medium">{{ t('services.heading') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div class="service"
             v-for="service in services"
        >
          <h3 class="text-lg font-medium uppercase">{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul v-if="service?.items?.length">
            <li class="ml-4 list-disc" v-for="item in service.items">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

</style>