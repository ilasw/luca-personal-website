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

useHead({
  htmlAttrs() {
    return {
      lang: 'en',
      ogImage: ogImage,
      twitterCard: 'summary_large_image',
    }
  },
})
</script>