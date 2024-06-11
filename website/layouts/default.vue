<template>
  <div id="page" class="min-h-screen flex flex-col">
    <Header/>
    <main class="main flex-1 py-5">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import ogImage from "~/public/images/me/luca-working-bormio.png";
import {useLocale} from "~/hooks/useLocale";

const {t} = useLocale();

useHead({
  htmlAttrs() {
    return {
      lang: 'en',
      description: t('seo.description'),
      ogDescription: t('seo.description'),
      ogImage: ogImage,
      twitterCard: 'summary_large_image',
      keywords: t('seo.keywords'),
    }
  },
})
</script>