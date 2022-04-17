<script setup lang="ts">
import {useToggle} from "@vueuse/core";

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
    <h4 class="text-gray-500 my-0 text-[.7rem]">
      <span class="place">{{ where }}</span> –
      <time>{{ when }}</time>
    </h4>
    <h3 class="text-lg font-bold mt-0 mb-1">{{ what }}</h3>
    <div class="copy">{{ copy }}</div>
    <picture v-if="stackImg?.length"
             class="block my-4"><img :src="`${stackImg}&perline=4`" alt=""></picture>
  </div>
</template>

<style scoped lang="postcss">
.copy {
  @apply text-sm;
}
</style>