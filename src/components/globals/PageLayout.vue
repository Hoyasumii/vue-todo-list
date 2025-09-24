<script setup lang="ts">
import { onMounted } from 'vue';
import PageHeader from './PageHeader.vue';

type Props = {
  title: string
}

const props = defineProps<Props>()

onMounted(() => {
  document.title = props.title;
})
</script>

<template>
  <PageHeader/>
  <main class="text-slate-950 min-h-dvh py-6 xl:w-4/12 lg:w-6/12 xl:py-16 flex flex-col gap-4">
    <slot />
  </main>
</template>
