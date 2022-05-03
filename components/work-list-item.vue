<script setup lang="ts">
type WorkListItem = {
  where: string,
  when: string,
  what: string,
  copy: string,
  stackImg: string
};

const {what, when, where, copy, stackImg} = defineProps<WorkListItem>();
</script>

<template>
  <div class="WorkListItem"
       role="listitem">
    <div class="text-gray-500 my-0 text-[.7rem]">
      <span class="place">{{ where }}</span> –
      <time>{{ when }}</time>
    </div>
    <h3 class="text-lg font-bold mt-0 mb-1">{{ what }}</h3>
    <div class="copy">{{ copy }}</div>
    <picture v-if="stackImg?.length"
             class="block my-4"><img :src="`${stackImg}`"
                                     :alt="`stack usato in ${where}`"
                                     loading="lazy"
    ></picture>
  </div>
</template>

<style scoped lang="postcss">
.copy {
  @apply text-sm;
}
</style>