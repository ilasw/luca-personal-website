<script setup>
import './styles/main.css';
</script>

<template>
  <Html :lang="$i18n.locale??'it'"/>
  <NuxtPage/>
</template>
