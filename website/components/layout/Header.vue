<script setup lang="ts">

import {useToggle} from "@vueuse/core";

const items = [
  {label: "Resume", url: "/"},
  {label: "Services", url: "/about"},
  {label: "Blog", url: "https://blog.sentiero.digital", target: "_blank"},
];

const [isOpen, toggle] = useToggle(false);
const id = useId();
</script>

<template>
  <header class="sticky top-0 left-0 w-full bg-white py-2.5 border-b border-b-neutral-100">
    <div class="container">
      <div class="flex items-center justify-end md:justify-between">
        <div class="hidden md:bock">
          <RouterLink class="link text-lg font-bold" to="/">
            Luca Pagliaro
          </RouterLink>
        </div>
        <nav class="px-4 md:px-0">
          <div class="text-right md:hidden">
            <button class="link"
                    :aria-controls="`menu-${id}`"
                    :aria-expanded="isOpen"
                    @click.prevent="toggle()"
            >{{ isOpen ? '⨉' : 'Menu'}}</button>
          </div>
          <ul :id="`menu-${id}`"
              :aria-hidden="!isOpen"
              :class="[`flex md:flex flex-row gap-4`, {'hidden': !isOpen}]"
          >
            <li v-for="item in items">
              <component class="link"
                         :is="item.url.startsWith('/') ? 'RouterLink' : 'a'"
                         :href="item.url"
                         :to="item.url"
                         :target="item.target"
              >
                {{ item.label }}
              </component>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.link {
  @apply inline-block py-2 px-1 underline-offset-2 hover:underline;
}
</style>