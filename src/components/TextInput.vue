<script setup lang="ts">
type Props = {
  placeholder?: string;
};

defineProps<Props>();
const model = defineModel<string>({ required: true });
</script>

<template>
  <label
    class="relative cursor-text group rounded-lg duration-300 transition-all inset-shadow-sm inset-shadow-slate-500/60 px-3 py-2 w-full focus-within:inset-shadow-blue-600/80">
    <input class="peer z-20 outline-0 w-full" type="text" :placeholder="placeholder" v-model="model">
    <div class="absolute w-full h-full rotate-180 inset-shadow-sm duration-300 transition-all inset-shadow-slate-500/60 px-3 py-2 inset-0 rounded-lg peer-focus:inset-shadow-blue-600/80 z-10" />
  </label>
</template>
