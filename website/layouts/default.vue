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
import ogImage from "~/public/images/me/luca-working-bormio-og.jpeg";
import {useLocale} from "~/hooks/useLocale";

const {t} = useLocale();

useHead({
  htmlAttrs() {
    return {
      lang: 'en',
    }
  },
  meta() {
      return [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'og:title', property: 'og:title', content: t('seo.title')},
        {hid: 'og:title', property: 'og:title', content: t('seo.title')},
        {hid: 'description', name: 'description', content: t('seo.description')},
        {hid: 'og:description', property: 'og:description', content: t('seo.description')},
        {hid: 'og:image', property: 'og:image', content: ogImage},
      ]
  },
})
</script>