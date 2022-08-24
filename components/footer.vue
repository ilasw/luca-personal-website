<script setup lang="ts">
const {
  heading,
  work,
  contact
} = defineProps<{ heading: string, work: { text: string }, contact: { text: string } }>();
console.log({heading, work, contact});
</script>

<template>
  <footer class="mt-40 mb-8">
    <div class="container">
      <div class="bg-neutral-100 py-16 md:py-20 px-8 rounded-xl">
        <div class="md:row">
          <div class="md:col-span-5 lg:col-span-3 mb-4">
            <h2 class="text-3xl font-bold">{{ heading }}</h2>
          </div>
          <div class="md:col-span-8 lg:col-span-4 mb-8">
            <h3 class="text-xl font-bold mb-2">💬 Let's talk</h3>
            <p class="max-w-[80%]" v-html="contact.text"/>
          </div>
          <div class="md:col-span-8 lg:col-span-4">
            <h3 class="text-xl font-bold mb-2">💻 Cerchi uno sviluppatore?</h3>
            <p class="max-w-[80%]" v-html="work.text"/>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>