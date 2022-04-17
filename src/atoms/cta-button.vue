<script setup lang="ts">
type CtaButtonProps = { as?: 'button' | 'link' }
const {as} = defineProps<CtaButtonProps>();
</script>

<template>
  <button v-if="as === 'button' || !as"
          v-bind="$attrs"
          class="cta-button --button"
  >
    <slot></slot>
  </button>

  <a v-bind="$attrs"
     v-else-if="as === 'link'"
     class="cta-button --link">
    <slot></slot>
  </a>
</template>

<style scoped lang="postcss">
.cta-button {
  @apply py-2 -my-2 inline-block;
}
</style>