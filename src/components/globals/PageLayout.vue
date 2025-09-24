<script setup lang="ts">
import { onMounted } from 'vue';
import PageHeader from './PageHeader.vue';

type Props = {
  title: string
}

const props = defineProps<Props>()

type Slots = {
  main: () => unknown;
  footer: () => unknown;
}

defineSlots<Slots>();

onMounted(() => {
  document.title = props.title;
})
</script>

<template>
  <PageHeader />
  <main class="text-slate-950 min-h-full flex-1 w-11/12 xl:w-4/12 lg:w-6/12 md:w-8/12 overflow-y-scroll flex flex-col gap-2 ">
    <slot name="main" />
  </main>
  <footer class="flex pb-4 w-11/12 xl:w-4/12 lg:w-6/12 md:w-8/12">
    <slot name="footer" />
  </footer>
</template>
