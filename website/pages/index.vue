<script setup lang="ts">
import Hero from "~/components/home/Hero.vue";
import Clients from "~/components/home/ClientLogos.vue";
import ServiceGrid from "~/components/home/ServiceGrid.vue";
import AboutMe from "~/components/home/AboutMe.vue";
import {useLocale} from "~/hooks/useLocale";

const {t} = useLocale();
</script>

<template>
  <Head>
    <Title>{{ t('seo.title') }}</Title>
  </Head>
  <Hero/>
  <Clients/>
  <ServiceGrid/>
  <AboutMe/>
</template>
