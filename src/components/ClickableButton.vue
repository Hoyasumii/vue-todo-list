<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

type Props = {
  class?: string;
}

const props = defineProps<Props>();

type Slots = {
  children: () => unknown;
}

defineSlots<Slots>();

</script>

<template>
  <button :class="twMerge('cursor-pointer flex justify-center items-center bg-white h-11 w-11 aspect-square rounded-xl inset-shadow-sm inset-shadow-slate-300/60 relative duration-300 transition-all hover:inset-shadow-emerald-400/80 hover:scale-[1.05] active:scale-100', props.class)">
    <div class="h-full w-full absolute inset-0 rounded-xl inset-shadow-sm inset-shadow-slate-300/60 rotate-180 hover:inset-shadow-cyan-400/80 duration-300 transition-all hover:scale-[1.05] bg-transparent active:scale-100"/>
    <slot name="children" />
  </button>
</template>
