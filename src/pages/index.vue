<script setup lang="ts">
import {useHead} from "@vueuse/head";
import staticData from '@/_data/home-page';
import HeroHeader from "@/components/hero-header.vue";
import IntroSection from "@/components/intro-section.vue";
import WorkList from "@/components/work-list.vue";

useHead({
  title: 'Luca Pagliaro | Senior front-end developer in Catania',
  meta: [
    {
      name: `description`,
      content: `Specialista nello sviluppo su WordPress, di Web App su stack JavaScript e di siti usabili ed accessibili.Adoro formazione e community locali ed eventi che frequento spesso anche come speaker.`,
    },
  ],
})
const data = staticData;
</script>

<template>

  <HeroHeader v-bind="data.hero"/>
  <IntroSection v-bind="data.about"/>
  <WorkList :works="data.resume.work"/>

  <footer>
    <div class="container">
      Footer & CTAs
    </div>
  </footer>
</template>

<style scoped>

</style>