<script setup lang="ts">

type Props = {
  placeholder?: string;
};

defineProps<Props>();
const model = defineModel<string>({ required: true });
</script>

<template>
  <label
    class="relative cursor-text group rounded-2xl duration-300 transition-all inset-shadow-sm inset-shadow-slate-300/60 px-8 py-3 w-full focus-within:inset-shadow-emerald-400/80 bg-white" >
    <input class="peer z-20 outline-0 w-full" type="text" :placeholder="placeholder" v-model="model" >
    <div
      class="absolute w-full h-full rotate-180 inset-shadow-sm duration-300 transition-all inset-shadow-slate-300/60 px-8 py-3 inset-0 rounded-2xl peer-focus:inset-shadow-cyan-400/80 z-10"  />
  </label>
</template>
