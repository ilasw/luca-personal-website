<script setup lang="ts">
import {computed, ref} from "vue";
import {useElementBounding, useWindowSize} from '@vueuse/core'

const {sections, title} = defineProps<{
  title: string,
  sections: { photo: string, label: string, copy: string }[]
}>();

const [MIN, MAX] = [50, 100]
const el = ref<HTMLElement | null>(null)
const {top, bottom} = useElementBounding(el)
const {height} = useWindowSize();

const animationFragmentHeight = computed(() => height.value / 10);
const maxWidth = computed(() => {
  if (!el?.value) return MIN;

  const maxTop = height.value + animationFragmentHeight.value;
  const minTop = height.value - animationFragmentHeight.value * 3;
  const valuePerScroll = MIN / height.value;

  if (top.value >= maxTop) return MIN;

  if (top.value > minTop) {
    return Math.max(MIN, MAX - (top.value - minTop) * (valuePerScroll * 5));
  }

  if (bottom.value < height.value * .75) {
    return Math.max(MIN, MAX - (height.value * .75 - bottom.value) * valuePerScroll);
  }

  return MAX;
});

</script>

<template>
  <section class="IntroSection"
           ref="el"
           :style="`--width-size:${maxWidth}%`">
    <div class="full-width-section z-10 text-white">
      <h2 class="py-20 md:py-40 font-bold text-center text-2xl md:text-[4vw]">🙋🏻 {{ title }}</h2>
      <section v-for="({photo, label, copy}, index) in sections"
               class="py-20 md:py-40">
        <div class="container">
          <div class="md:row items-center">
            <div :class="['md:col-span-5', {'md:col-start-8': index%2}]">
              <span class="text-neutral-400"
                    v-motion
                    :initial="{y: -10, x: -10, opacity: 0}"
                    :visible="{y:0, x:0, opacity:1, transition: { delay: 100} }"
              >{{ label }}</span>
              <h3 class="text-xl leading-[1.1] md:text-2xl">
                <template v-for="(word, count) in copy.split(' ')">
              <span class="inline-block"
                    v-motion
                    :initial="{y: -10, x: -10, opacity: 0}"
                    :visible="{y:0, x:0, opacity:1, transition: { delay: 25*count} }"
              >{{ word }}&nbsp;</span>
                </template>
              </h3>
            </div>
            <div :class="['md:col-span-5 md:row-start-1', {'md:col-start-8': !(index%2)}]">
              <picture class="block my-10 mx-auto">
                <img :alt="`Luca Pagliaro - ${label}`"
                     class="w-full"
                     height="400"
                     loading="lazy"
                     width="400"
                     :src="photo">
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section class="md:min-h-[50vh] -mt-2 md:-mt-40 py-20 md:py-40"/>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.IntroSection {
  --width-size: 50%; /* end to 125%; */
  @apply relative text-white mx-auto bg-neutral-900 rounded-3xl overflow-hidden overflow-clip;
  padding: 20vh 0 0;
  width: var(--width-size);
  will-change: width;
}
</style>