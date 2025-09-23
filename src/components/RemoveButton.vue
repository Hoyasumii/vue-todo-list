<script setup lang="ts">
import { Trash2 } from 'lucide-vue-next';

</script>

<template>
  <div class="relative duration-300 transition-all inset-shadow-sm inset-shadow-rose-400/60 rounded  bg-rose-600 aspect-square">
    <div
      class="-z-10 absolute duration-300 transition-all inset-0 inset-shadow-sm inset-shadow-rose-400/60 rounded size-4 rotate-180" />
    <Trash2 class="text-white duration-300 transition-all" />
  </div>
</template>
