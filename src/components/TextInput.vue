<script setup lang="ts">
type Props = {
  name: string;
  placeholder?: string;
};

defineProps<Props>();
</script>

<template>
  <div
    class="relative group rounded-xl duration-300 transition-all border border-stone-700 bg-gray-900 hover:border-emerald-700 focus-within:border-emerald-600 p-2">
    <div v-if="placeholder" class="absolute">{{ placeholder }}</div>
    <input class="outline-0 w-full" type="text" :name="name" :v-model="name">
  </div>
</template>
