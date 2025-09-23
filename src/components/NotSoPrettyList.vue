<script setup lang="ts">

type Slots = {
  content: () => unknown;
  postList?: () => unknown;
}

const slots = defineSlots<Slots>()

</script>

<template>
  <div class="flex gap-2 items-stretch w-full" v-if="slots.postList">
    <div
      class="relative rounded-lg inset-shadow-sm inset-shadow-slate-400/60 px-6 py-3 shadow text-gray-800 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-100 select-none w-full">
      <div class="-z-10 rounded-lg inset-shadow-sm inset-shadow-slate-400/60 px-6 py-3 absolute inset-0 rotate-180" />
      <slot name="content" />
    </div>
    <slot name="postList" />
  </div>
  <template v-else>
    <div
      class="relative rounded-lg inset-shadow-sm inset-shadow-slate-400/60 px-6 py-3 shadow text-gray-800 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-100 select-none">
      <div class="-z-10 rounded-lg inset-shadow-sm inset-shadow-slate-400/60 px-6 py-3 absolute inset-0 rotate-180" />
      <slot name="content" />
    </div>
  </template>
</template>
