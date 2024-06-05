<script setup lang="ts">
import {useLocale} from "~/hooks/useLocale";
import Hero from "~/components/home/Hero.vue";
import Clients from "~/components/home/ClientLogos.vue";
import ServiceGrid from "~/components/home/ServiceGrid.vue";
import AboutMe from "~/components/home/AboutMe.vue";

const {t} = useLocale()
</script>

<template>
  <Head>
    <Title>{{ t('seo.title') }}</Title>
    <Meta name="description" content="{{ t('seo.description') }}"/>
    <Meta property="og:description" content="{{ t('seo.description') }}"/>
    <Meta name="keywords" content="{{ t('seo.keywords') }}"/>
  </Head>

  <Hero/>
  <Clients/>
  <ServiceGrid/>
  <AboutMe/>
</template>
