<script setup lang="ts">
type Props = {
  name: string;
  placeholder?: string;
};

defineProps<Props>();
</script>

<template>
  <label
    class="relative cursor-pointer group rounded-lg duration-300 transition-all inset-shadow-sm inset-shadow-slate-400/60 px-3 py-2 w-full focus-within:inset-shadow-blue-500/60">
    <input class="peer z-20 outline-0 w-full" type="text" :placeholder="placeholder" :name="name" :v-model="name">
    <div class="absolute w-full h-full rotate-180 inset-shadow-sm duration-300 transition-all inset-shadow-slate-400/60 px-3 py-2 inset-0 rounded-lg peer-focus:inset-shadow-blue-500/60 z-10" />
  </label>
</template>
