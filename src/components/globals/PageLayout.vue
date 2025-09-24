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
  <main class="text-slate-950 xl:w-4/12 lg:w-6/12 flex flex-col gap-4 min-h-dvh">
    <slot name="main" />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
</template>
