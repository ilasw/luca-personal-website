<script setup lang="ts">
import {computed, ref} from "vue";
import {useElementBounding, useWindowSize} from "@vueuse/core";

const {works = []} = defineProps<{ works: any[] }>();

const el = ref<HTMLElement | null>(null);
const {top} = useElementBounding(el)
const {height, width} = useWindowSize();

const headingSize = computed(() => {
  const MIN_SIZE = Math.max(25, width.value / 30);
  const MAX_SIZE = (width.value / 10);

  if (top.value <= (height.value * -1)) return MIN_SIZE;

  return MIN_SIZE + Math.min(MAX_SIZE, MAX_SIZE * ((top.value + height.value) / height.value));
});
</script>

<template>
  <section class="relative z-10 md:mt-20" ref="el">
    <div class="container relative">
      <div class="relative md:sticky md:top-0 min-h-screen grid items-center pointer-events-none">
        <ClientOnly>
          <h2 class="heading sticky top-16 md:static"
              :style="`--heading-font-size: ${headingSize||32}px;`"
          >👨🏻‍💻 <span class="block md:inline">Esperienze</span></h2>
          <template #fallback>👨🏻‍💻 Esperienze</template>
        </ClientOnly>
      </div>
      <div class="md:row">
        <div class="md:col-span-8 md:col-start-5">
          <div class="md:min-h-screen"/>
          <div role="list"
               class="md:row">
            <template v-for="(work, index) in works">
              <WorkListItem
                  :class="['md:col-span-10 lg:col-span-7 my-14', {'md:col-start-3 lg:col-start-5': (index%2===0)}]"
                  v-bind="work"/>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.heading {
  --heading-font-size: 3rem;
  font-size: var(--heading-font-size);
}
</style>