<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="container">
      <div class="rounded-2xl bg-neutral-800 text-white p-5 mb-4">
        &copy; {{ currentYear }} Luca Pagliaro
      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">

</style>