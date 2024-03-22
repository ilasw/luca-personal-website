<script setup lang="ts">
import {computed} from "vue";

const {heading, motto, copy, ctas} = defineProps<{
  heading: string,
  motto: string,
  copy: string,
  ctas: { label: string, href: string }[],
}>();

// const parallaxRef = ref(null);
// const parallax = reactive(useParallax(parallaxRef));
// const parallaxCSSVariables = computed(() => `
//   --picture-rotate-x: ${parallax.roll * 20}deg;
//   --picture-rotate-y: ${parallax.tilt * 12}deg;
//   --shadow-distance-x: ${parallax.tilt * -8}%;
//   --shadow-distance-y: ${parallax.roll * 10}%;
// `);
</script>

<template>
  <header
      ref="parallaxRef">
    <div class="container">
      <div class="min-h-[90vh] grid place-items-center text-center">
        <div>
          <h1 class="text-5xl md:text-7xl font-bold my-4">{{ heading }}</h1>
          <h2 class="text-lg" v-html="motto"/>
          <p class="text-sm">{{ copy }}</p>
          <div class="cta-wrapper mt-3"
               v-if="ctas?.length">
            <template v-for="cta in ctas">
              <CtaButton as="link"
                         class="mr-4"
                         target="_blank"
                         rel="noopener noreferrer"
                         :href="cta.href"
              ><span>{{ cta.label }}</span></CtaButton>
            </template>
            <template v-for="locale in $i18n.locales.filter(i => i.code !== $i18n.locale)">
              <CtaButton as="link"
                         class="mr-4"
                         :href="switchLocalePath(locale.code)"
              ><span>{{ locale.name }}</span></CtaButton>
            </template>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.picture {
  @apply relative block;

  img {
    @apply z-10 relative;
    will-change: transform;
  }
}
</style>