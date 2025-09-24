<script setup lang="ts">
import { ClickableButton } from '@/components';
import { Github } from 'lucide-vue-next';

</script>

<template>
  <header
    class="inset-shadow-sm inset-shadow-slate-300/60 bg-white backdrop-blur-sm w-[95%] mt-4 px-8 py-4 rounded-3xl flex justify-between">
    <div class="-z-10 absolute rotate-180 inset-shadow-sm inset-shadow-slate-300 w-full h-full inset-0 rounded-3xl" />
    <img src="/logo.png" class="h-10 pointer-events-none">
    <a target="_blank" href="https://github.com/hoyasumii/vue-todo-list.git">
      <ClickableButton>
        <template #children>
          <Github />
        </template>
      </ClickableButton>
    </a>
  </header>
</template>
