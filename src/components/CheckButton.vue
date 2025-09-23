<script setup lang="ts">
import { Check } from 'lucide-vue-next';

type Props = {
  active: boolean;
}

defineProps<Props>();
</script>

<template>
  <div :data-active="active" class="relative duration-300 transition-all inset-shadow-sm inset-shadow-slate-400/60 data-[active=true]:inset-shadow-blue-400/60 rounded size-4 data-[active=true]:bg-blue-600">
    <div :data-active="active" class="-z-10 absolute duration-300 transition-all inset-0 inset-shadow-sm inset-shadow-slate-400/60 data-[active=true]:inset-shadow-blue-400/60 rounded size-4 data-[active=true]:bg-blue-600 rotate-180" />
    <Check :data-active="active" class="size-4 text-white duration-300 transition-all opacity-0 data-[active=true]:opacity-100" />
  </div>
</template>
