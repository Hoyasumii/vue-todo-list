<script setup lang="ts">
import { motion } from 'motion-v';

type Slots = {
  content: () => unknown;
}

defineSlots<Slots>()

</script>

<template>
  <motion.div
    :initial="{ scale: '0.95', filter: 'blur(0.5px)', opacity: '.7' }"
    :animate="{ scale: '1', filter: 'blur(0)', opacity: '1' }"
    class="relative rounded-lg inset-shadow-sm inset-shadow-slate-300/60 px-6 py-3 text-gray-800 cursor-pointer transition-all duration-300 hover:scale-[1.01] active:scale-100 select-none bg-white hover:z-20">
    <div class="-z-10 rounded-lg inset-shadow-sm inset-shadow-slate-300/60 px-6 py-3 absolute inset-0 rotate-180" />
    <slot name="content" />
  </motion.div>
</template>
