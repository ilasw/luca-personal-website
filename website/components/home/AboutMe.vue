<script setup lang="ts">

</script>

<template>
  <section class="my-40">
    <div class="container">
      <div class="text-center mb-10">
        <h2 class="text-6xl font-bold mb-4">About me</h2>
        <p class="mx-auto w-3/4 md:w-1/2 text-lg leading-6">With over 10 years of experience, I'm a highly skilled developer with a proven track record of delivering
          successful projects. I'm passionate about clean code, modern technologies, and building applications that are
          both user-friendly and performant.</p>
      </div>

      <div class="mx-auto w-3/4">
        <ul class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <li class="relative">
            <NuxtImg
                src="/images/me/luca-event.png"
                alt=""
                class="image"
            />
          </li>
          <li class="relative">
            <NuxtImg
                src="/images/me/luca-wordcamp-2019.jpeg"
                alt=""
                class="image"
            />
          </li>
          <li class="relative">
            <NuxtImg
                src="/images/me/luca-working-bormio.png"
                alt=""
                class="image"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
  .image{
    @apply rounded aspect-square w-full object-cover transition duration-500 group-hover:opacity-90;
    box-shadow: -6px 6px 0 0 #00000020;
  }
</style>