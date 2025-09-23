<script setup lang="ts">
type Props = {
  name: string;
  placeholder?: string;
};

defineProps<Props>();
</script>

<template>
  <div
    class="relative group rounded-xl duration-300 transition-all border border-stone-700 bg-gray-950 hover:border-emerald-400/40 inset-shadow-sm inset-shadow-emerald-900 focus-within:border-emerald-300 focus-within:hover:border-emerald-400 p-2">
    <div v-if="placeholder" class="absolute">{{ placeholder }}</div>
    <input class="outline-0 w-full" type="text" :name="name" :v-model="name">
  </div>
</template>
