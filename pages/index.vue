<script setup lang="ts">
import staticData from '@/_data/home-page';
import HeroHeader from "@/components/hero-header.vue";
import IntroSection from "@/components/intro-section.vue";
import Footer from "@/components/footer.vue";
import WorkList from "@/components/work-list.vue";
import photoWordcamp from "@/assets/luca-wordcamp-2019.jpeg";
import {computed, getCurrentInstance} from "vue";

const {appContext} = getCurrentInstance();
const [title, description] = [
  'Luca Pagliaro | Senior front-end developer in Catania',
  `Specialista nello sviluppo su stack JavaScript / TypeScript, su WordPress, ed in generale di siti usabili ed accessibili`
];

useHead({
  title,
  meta: [
    {name: 'title', property: `og:title`, content: title},
    {name: `description`, property: `og:description`, content: description},
    {name: 'image', property: `og:image`, content: photoWordcamp},
    {property: 'og:type', content: 'website'},
    {name: 'author', content: 'Luca Pagliaro'}
  ],
})

// const {lang} = useI18n();
const data = computed(() => staticData[appContext.app.i18n.locale])
</script>

<template>
  <HeroHeader v-bind="data.hero"/>
  <IntroSection v-bind="data.about"/>
  <WorkList v-bind="data.resume"/>
  <Footer v-bind="data.footer"/>
</template>